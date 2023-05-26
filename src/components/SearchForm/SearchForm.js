import React from 'react';

const SearchForm = (props) => {
  function submit() {
    props.setIsLoading(true);
    setTimeout(() => {
      props.setIsLoading(false);
    }, 3000);
  }

  return (
    <form className='search-container'>
      <div className='search-container__content'>
        <h1 className='search-container__title'>
          What&apos;s going on in the world?
        </h1>
        <p className='search-container__subtitle'>
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Enter topic'
            className='search-bar__input'
          />
          <button className='search-bar__button' onClick={submit}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;