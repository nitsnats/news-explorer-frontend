import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

const Main = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className='main'>
      <SearchForm setIsLoading={setIsLoading} />
      {isLoading ? (
        <div>
          <Preloader />
          <NotFound />
        </div>
      ) : (
        <NewsCardList
          cards={props.cards}
          isSavedNews={false}
          isLoggedIn={props.isLoggedIn}
        ></NewsCardList>
      )}
      <About />
    </main>
  );
};

export default Main;