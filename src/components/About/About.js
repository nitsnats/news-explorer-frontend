import React from 'react';

import aboutImage from '../../images/avatar_image.png';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <img
          className='about__image'
          src={aboutImage}
          alt='Author of the website'
        />
        <div className='about__text-container'>
          <h1 className='about__title'>About the author</h1>
          <p className='about__text'>
          This block describes the project author. Here you should indicate your 
          name, what you do, and which development technologies you know.
          </p>
          <p className='about__text'>
          You can also talk about your experience with Practicum, what you learned 
          there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;