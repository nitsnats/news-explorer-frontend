import React, { useState, useEffect } from 'react';

const NewsCard = ({
  _id,
  keyword,
  date,
  title,
  description,
  source,
  url,
  image,
  isSaved,
  isSavedNews,
  isLoggedIn,
  deleteArticleHandler,
  saveArticle,
}) => {
  const [isSavedIcon, setIsSavedIcon] = useState(false);
  const [cardId, setCardId] = useState('');

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  // function formatDate() {
  //   if (isSavedNews) {
  //     return date.substr(0, 15);
  //   } else {
  //     return date.split('T')[0];
  //   }
  // }

  function formatDate() {
    if (!date) {
      return ''; // Handle the case where date is undefined or null
    }
    
    if (isSavedNews) {
      return date.substr(0, 15);
    } else {
      return date.split('T')[0];
    }
  }

  async function handleDelete() {
    const cardDeleted = await deleteArticleHandler(cardId);
    if (cardDeleted) {
      setIsSavedIcon(false);
      return;
    } 
  }

  async function handleArticleSave() {
    if (isSavedIcon) {
      handleDelete();
      return;
    } else {
      const savedArticleId = await saveArticle({
        keyword,
        title,
        text: description,
        date,
        source,
        link: url,
        image,
      },);

      if (savedArticleId) {
        setIsSavedIcon(true);
        setCardId(savedArticleId);
        // console.log(savedArticleId)
        return;
      } else {
        setIsSavedIcon(false);
        return;
      }
    }
  }

  useEffect(() => {
    if (isSaved) {
      setIsSavedIcon(true);
    }
    return;
  }, [isSaved, setIsSavedIcon]);

  function setDeleteSave() {
    if (isSavedNews && isLoggedIn) {
      return (
        <button className='news-card__delete-button' onClick={handleDelete}>
          <span className='news-card__save-button-label'>
            <p>Remove from saved</p>
          </span>
        </button>
      );
    } else if (!isSavedNews && isLoggedIn) {
      return (
        <button
          className={`news-card__save-button
          ${isSavedIcon ? 'news-card__save-button_active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleArticleSave();
          }}
        ></button>
      );
    } else {
      return (
        <button
          className='news-card__save-button'
          onClick={(e) => {
            e.stopPropagation();
            handleArticleSave();
          }}
        >
          <span className='news-card__save-button-label'>
            <p>Sign in to save articles</p>
          </span>
        </button>
      );
    }
  }

  function keywords() {
    if (isSavedNews) {
      return (
        <div className='news-card__keyword'>
          <p>{capitalize(keyword)}</p>
        </div>
      );
    }
  }

  useEffect(() => {
    if (_id) {
      setCardId(_id);
      return;
    } else {
      setCardId(null);
    }
    return;
  }, [_id]);

  const imgStyle = { backgroundImage: `url("${image}")`}

  return (
    
    <li className='news-card'>
      {setDeleteSave()}	      
      <a	      
        className='news-card__anchor'	       
        href={url}	       
        target='_blank'	       
        rel='noopener noreferrer'	        
      >
        {keywords()}
        <div
          className='news-card__image'
          style={imgStyle}
          // style={{ backgroundImage: `url(${image})`}}
        ></div>
        <div className='news-card__info-container'>
          <p className='news-card__date'>{formatDate()}</p>
          <h3 className='news-card__title'>{title}</h3>
          <p className='news-card__text'>{description}</p>
          <cite className='news-card__source'>{source}</cite>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;