import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

// function SavedNews({ pathname }) {
  
//   return (
//     <section className='saved-news'>
//       {/* <SavedNewsHeader /> */}
//       <NewsCardList pathname={pathname} />
//     </section>
//   )
// }

const SavedNews = (props) => {
  return (
    <section className='saved-news'>
      <NewsCardList
        cards={props.cards}
        isLoggedIn={props.isLoggedIn}
        isSavedNews={true}
      />
    </section>
  );
};
export default SavedNews;
