import React from 'react';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__icon'></div>
      <h2 className='not-found__title'>Nothing found</h2>
      <p className='not-found__text'>
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NotFound;