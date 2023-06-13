import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

const SavedNews = ({
  isLoading,
  setIsLoading,
  isLoggedIn,
  deleteArticleHandler,
  getUserArticles,
}) => {
  const [saveNews, setSaveNews] = useState([]);
  const [sortKeyword, setSortKeyword] = useState([]);

  const keywordRank = (arr) => {
    const keywordsObj = arr.reduce((acc, card) => {
      const lowercase = card.keyword.toLowerCase();
      acc[lowercase] = (acc[lowercase] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(keywordsObj).sort(
      (a, b) => keywordsObj[b] - keywordsObj[a]
    );
  };

  const sortCardsKeyword = (refArr, objectSort) => {
    const itemPositions = {};
    refArr.forEach((id, index) => {
      itemPositions[id] = index;
    });

    return [...objectSort].sort(
      (a, b) => itemPositions[a.keyword] - itemPositions[b.keyword]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const cards = JSON.parse(localStorage.getItem('articles'));

      if (cards && cards.length > 0) {
        const keywordRankArr = keywordRank(cards);
        setSortKeyword(keywordRankArr);
        setSaveNews(cards);
        setIsLoading(false);
      } else {
        try {
          const res = await getUserArticles(token);
          const newCards = res.data.map((card) => ({
            _id: card._id,
            keyword: card.keyword,
            date: card.publishedAt, 
            title: card.title,
            description: card.text, 
            source: card.source,
            url: card.url,
            image: card.image,
          }));

          const keywordRankArr = keywordRank(newCards);
          setSortKeyword(keywordRankArr);

          const sortedCards = sortCardsKeyword(keywordRankArr, newCards);
          localStorage.setItem('articles', JSON.stringify(sortedCards));
          setSaveNews(sortedCards);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [getUserArticles, setIsLoading]);

  const deleteCard = async (id) => {
    try {
      await deleteArticleHandler(id);
      const updatedCards = saveNews.filter((card) => card._id !== id);
      setSaveNews(updatedCards);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCardList = () => {
    if (saveNews.length === 0) {
      return <NotFound error={false} />;
    }

    if (isLoading) {
      return <Preloader />;
    }

    return (
      <NewsCardList
        isSavedNews={true}
        isLoggedIn={isLoggedIn}
        cards={saveNews}
        setCards={setSaveNews}
        visibleCards={saveNews.length}
        deleteArticleHandler={deleteCard}
        sortKeyword={sortKeyword}
      />
    );
  };

  return (
    <section className='saved-news'>
      <SavedNewsHeader saveNews={saveNews} sortKeyword={sortKeyword} />
      {renderCardList()}
    </section>
  );
};

SavedNews.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  deleteArticleHandler: PropTypes.func.isRequired,
  getUserArticles: PropTypes.func.isRequired,
};

export default SavedNews;