import React, { useEffect, useRef, useState } from 'react';
import { INITIAL_CARDS } from '../../utils/configApi';

const SearchForm = ({
  setCards,
  setVisibleCards,
  setIsLoading,
  isLoggedIn,
  getUserArticles,
  searchHandler,
}) => {
  const searchRef = useRef();
  const [disableInputs, setDisableInputs] = useState(false);
  const errorMessage = 'Please enter a keyword';

  function searchSort(saveNews) {
    searchHandler(searchRef.current.value)
      .then((res) => {
        let newArticles = res.map(article => {
          if (saveNews.some(card => card.url === article.url)) {
            article.isSaved = true;
            article._id = saveNews.find(card => card.url === article.url)._id;
          }
          article.keyword = searchRef.current.value;
          return article;
        });

        return newArticles;
      })
      .then((articles) => {
        setVisibleCards(INITIAL_CARDS);
        setCards(articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setDisableInputs(false);
      });
  }

  function newsSearch() {
    setDisableInputs(true);
    localStorage.setItem('keyword-search', searchRef.current.value);
    if (searchRef.current.value.length > 0) {
      setIsLoading(true);

      if (!isLoggedIn) {
        searchHandler(searchRef.current.value)
          .then((res) => {
            // console.log(res);
            // if (!Array.isArray(res)) {
            //   throw new Error('Invalid response format'); // Throw an error if res is not an array
            // }
            let newArticles = res.map(article => {
              article.keyword = searchRef.current.value;
              return article;
            });
            console.log(newArticles);
            return newArticles;
          })
          .then((articles) => {
            setVisibleCards(INITIAL_CARDS);
            setCards(articles);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsLoading(false);
            setDisableInputs(false);
          });
      } else {
        let saveNews = JSON.parse(localStorage.getItem('articles'));

        if (saveNews) {
          searchSort(saveNews);
        } else {
          const token = localStorage.getItem('token');
          getUserArticles(token)
            .then((res) => {
              let newCards = res.map(card => ({
                _id: card._id,
                keyword: card.keyword,
                publishedAt: card.date,
                title: card.title,
                description: card.text,
                source: card.source,
                url: card.link,
                urlToImage: card.image,
              }));

              localStorage.setItem('articles', JSON.stringify(newCards));
              searchSort(newCards);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }

  function searchEventHandler(e) {
    e.preventDefault();
    newsSearch();
  }

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      searchEventHandler(e);
    }
  }

  useEffect(() => {
    const searchResults = localStorage.getItem('keyword-search');
    if (searchResults) {
      searchRef.current.value = searchResults;
      newsSearch();
    }
  }, [isLoggedIn]);

  return (
    <section className='search-container'>
      <div className='search-container__content'>
        <h2 className='search-container__title'>
          What&apos;s going on in the world?
        </h2>
        <p className='search-container__subtitle'>
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <form onSubmit={searchEventHandler} className='search-bar'>
          <input
            ref={searchRef}
            onKeyUp={handleEnterKey}
            type='text'
            placeholder={disableInputs ? errorMessage : 'Enter topic'}
            className={`search-bar__input ${
              disableInputs ? 'search-bar__input_disabled' : ''
            }`}
          />
          <button type='submit' className='search-bar__button'>
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;