import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = (props) => {
  return (
    <section className='news-card-list'>
      <div className='news-card-list__wrapper'>
        {!props.isSavedNews ? (
          <h1 className='news-card-list__title'>Search results</h1>
        ) : (
          ''
        )}

        <ul className='news-card-list__container'>
          {props.cards &&
            props.cards
              .slice(0, 3)
              .map((card, i) => (
                <NewsCard
                  isSavedNews={props.isSavedNews}
                  isLoggedIn={props.isLoggedIn}
                  key={card._id}
                  card={card}
                  index={i}
                />
              ))}
        </ul>

        {!props.isSavedRoute ? (
          <button
            className='news-card-list__show-more'
          >
            Show more
          </button>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default NewsCardList;