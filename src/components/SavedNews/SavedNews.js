// import React, { useCallback, useEffect, useState } from 'react';
// import NewsCardList from '../NewsCardList/NewsCardList';
// import Preloader from '../Preloader/Preloader';
// import NotFound from '../NotFound/NotFound';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

// const SavedNews = ({
//   isLoading,
//   setIsLoading,
//   isLoggedIn,
//   deleteArticleHandler,
//   getUserArticles,
// }) => {
//   const [saveNews, setSaveNews] = useState();
//   const [sortKeyword, setSortKeyword] = useState([]);

//   function deleteCard(id) {
//     if (id) {
//       deleteArticleHandler(id)
//         .then(() => {
//           getCards();
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }

//   const keywordRank = (arr) => {
//     if (arr) {
//       let keywords = [];
//       arr.forEach((card) => {
//         const lowercase = card.keyword.toLowerCase();
//         keywords.push(lowercase);
//         return;
//       });
//       let result = {};
//       for (let i = 0; i < keywords.length; ++i) {
//         if (!result[keywords[i]]) result[keywords[i]] = 0;
//         ++result[keywords[i]];
//       }
//       const keywordsObj = { ...result };

//       let sortResult = [];
//       for (let i = 0; i < Object.keys(result).length; ++i) {
//         const reducedObj = Object.keys(keywordsObj).reduce((a, b) =>
//           keywordsObj[a] > keywordsObj[b] ? a : b
//         );
//         sortResult.push(reducedObj);
//         delete keywordsObj[reducedObj];
//       }
//       return sortResult;
//     } else {
//       return;
//     }
//   };

//   function sortCardsKeyword(refArr, objectSort) {
//     const itemPositions = {};
//     for (const [index, id] of refArr.entries()) {
//       itemPositions[id] = index;
//     }

//     objectSort.sort(
//       (a, b) => itemPositions[a.keyword] - itemPositions[b.keyword]
//     );

//     return objectSort;
//   }

//   const getCards = useCallback(() => {
//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     const cards = JSON.parse(localStorage.getItem('articles'));
//     if (cards) {
//       const keywordRankArr = keywordRank(cards);
//       setSortKeyword(keywordRankArr);
//       setSaveNews(cards);
//       setIsLoading(false);
//     } else {
//       getUserArticles(token)
//         .then((res) => {
//           let newCards = [];
//           res.forEach((card) => {
//             const newCard = {
//               _id: card._id,
//               keyword: card.keyword,
//               publishedAt: card.date,
//               title: card.title,
//               description: card.text,
//               source: card.source,
//               url: card.link,
//               urlToImage: card.image,
//             };

//             newCards.push(newCard);
//             return;
//           });
//           return newCards;
//         })
//         .then((newCards) => {
//           const keywordRankArr = keywordRank(newCards);
//           setSortKeyword(keywordRankArr);
//           return sortCardsKeyword(keywordRankArr, newCards);
//         })
//         .then((sortCards) => {
//           localStorage.setItem('articles', JSON.stringify(sortCards));
//           setSaveNews(sortCards);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [setIsLoading, getUserArticles]);

//   function renderCardList() {
//     if (!saveNews) {
//       return <NotFound error={true} />;
//     } else {
//       if (isLoading) {
//         return <Preloader />;
//       } else if (!isLoading) {
//         if (saveNews.length === 0) {
//           return <NotFound error={false} />;
//         } else if (saveNews) {
//           return (
//             <NewsCardList
//               isSavedNews={true}
//               isLoggedIn={isLoggedIn}
//               cards={saveNews}
//               setCards={setSaveNews}
//               visibleCards={saveNews.length}
//               setVisibleCards={null}
//               deleteArticleHandler={deleteCard}
//               sortKeyword={sortKeyword}
//             />
//           );
//         }
//       }
//       return;
//     }
//   }

//   useEffect(() => {
//     getCards();
//   }, [getCards]);

//   return (
//     <section className='saved-news'>
//       <SavedNewsHeader 
//         saveNews={saveNews} 
//         sortKeyword={sortKeyword} 
//       />
//       {renderCardList()}
//     </section>
//   );
// };

// export default SavedNews;

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import NewsCardList from '../NewsCardList/NewsCardList';
// import Preloader from '../Preloader/Preloader';
// import NotFound from '../NotFound/NotFound';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

// const SavedNews = ({
//   isLoading,
//   setIsLoading,
//   isLoggedIn,
//   deleteArticleHandler,
//   getUserArticles,
// }) => {
//   const [saveNews, setSaveNews] = useState([]);
//   const [sortKeyword, setSortKeyword] = useState([]);

//   const keywordRank = (arr) => {
//     const keywordsObj = arr.reduce((acc, card) => {
//       const lowercase = card.keyword.toLowerCase();
//       acc[lowercase] = (acc[lowercase] || 0) + 1;
//       return acc;
//     }, {});

//     return Object.keys(keywordsObj).sort(
//       (a, b) => keywordsObj[b] - keywordsObj[a]
//     );
//   };

//   const sortCardsKeyword = (refArr, objectSort) => {
//     const itemPositions = {};
//     refArr.forEach((id, index) => {
//       itemPositions[id] = index;
//     });

//     return [...objectSort].sort(
//       (a, b) => itemPositions[a.keyword] - itemPositions[b.keyword]
//     );
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     const cards = JSON.parse(localStorage.getItem('articles'));

//     if (cards) {
//       const keywordRankArr = keywordRank(cards);
//       setSortKeyword(keywordRankArr);
//       setSaveNews(cards);
//       setIsLoading(false);
//     } else {
//       getUserArticles(token)
//         .then((res) => {
//           const newCards = res.map((card) => ({
//             _id: card._id,
//             keyword: card.keyword,
//             publishedAt: card.date,
//             title: card.title,
//             description: card.text,
//             source: card.source,
//             url: card.link,
//             urlToImage: card.image,
//           }));

//           const keywordRankArr = keywordRank(newCards);
//           setSortKeyword(keywordRankArr);

//           const sortedCards = sortCardsKeyword(keywordRankArr, newCards);
//           localStorage.setItem('articles', JSON.stringify(sortedCards));
//           setSaveNews(sortedCards);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     }
//   }, [getUserArticles, setIsLoading]);

//   const deleteCard = (id) => {
//     if (id) {
//       deleteArticleHandler(id)
//         .then(() => {
//           const updatedCards = saveNews.filter((card) => card._id !== id);
//           setSaveNews(updatedCards);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   const renderCardList = () => {
//     if (saveNews.length === 0) {
//       return <NotFound error={false} />;
//     }

//     if (isLoading) {
//       return <Preloader />;
//     }

//     return (
//       <NewsCardList
//         isSavedNews={true}
//         isLoggedIn={isLoggedIn}
//         cards={saveNews}
//         setCards={setSaveNews}
//         visibleCards={saveNews.length}
//         deleteArticleHandler={deleteCard}
//         sortKeyword={sortKeyword}
//       />
//     );
//   };

//   return (
//     <section className='saved-news'>
//       <SavedNewsHeader saveNews={saveNews} sortKeyword={sortKeyword} />
//       {renderCardList()}
//     </section>
//   );
// };

// SavedNews.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   setIsLoading: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
//   deleteArticleHandler: PropTypes.func.isRequired,
//   getUserArticles: PropTypes.func.isRequired,
// };

// export default SavedNews;

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
    setIsLoading(true);
    const token = localStorage.getItem('token');
    const cards = JSON.parse(localStorage.getItem('articles'));

    if (cards) {
      const keywordRankArr = keywordRank(cards);
      setSortKeyword(keywordRankArr);
      setSaveNews(cards);
      setIsLoading(false);
    } else {
      getUserArticles(token)
        .then((res) => {
          const newCards = res.map((card) => ({
            _id: card._id,
            keyword: card.keyword,
            publishedAt: card.date,
            title: card.title,
            description: card.text,
            source: card.source,
            url: card.link,
            urlToImage: card.image,
          }));

          const keywordRankArr = keywordRank(newCards);
          setSortKeyword(keywordRankArr);

          const sortedCards = sortCardsKeyword(keywordRankArr, newCards);
          localStorage.setItem('articles', JSON.stringify(sortedCards));
          setSaveNews(sortedCards);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  // }, [getUserArticles, setIsLoading]);
}, []);

  const deleteCard = (id) => {
    if (id) {
      deleteArticleHandler(id)
        .then(() => {
          const updatedCards = saveNews.filter((card) => card._id !== id);
          setSaveNews(updatedCards);
        })
        .catch((err) => {
          console.log(err);
        });
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