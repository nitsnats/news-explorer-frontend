import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className='saved-news-header'>
      <div className='saved-news-header__container'>
        <p className='saved-news-header__label'>Saved articles</p>
        <h1 className='saved-news-header__title'>
          {currentUser.name}, you have 3 saved articles.</h1>
        <p className='saved-news-header__keyword-text'>
          By keywords: <span className='saved-news-header__keywords'>Science</span>, 
          <span className="saved-news-header__keyword">Art</span> and 
          <span className="saved-news-header__keyword">2nd others</span>
        </p>
      </div>
    </section>
  )
}

export default SavedNewsHeader;