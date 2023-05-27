import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({ pathname }) {
  
  return (
    <section className='saved-news'>
      {/* <SavedNewsHeader /> */}
      <NewsCardList pathname={pathname} />
    </section>
  )
}

export default SavedNews;
