import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/facebook_icon.svg';
import github from '../../images/github_icon.svg';

function Footer() {
  return (
    <footer className='footer'>
      {/* <div className='footer__container'> */}
      <p className='footer__copyright'>
          © {new Date().getFullYear()} Nitsa | New API
      </p>
      <div className='footer__content-container'>
        <ul className='footer__content footer__links'>
          <li className='footer__item'>
            <Link className='footer__link' to='/'>
                Home
            </Link>
          </li>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://practicum.yandex.com/'
              target='_blank'
              rel='noreferrer'
            >
                Practicum
            </a>
          </li>
        </ul>
        <ul className='footer__content footer__icons'>
          <li>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
            >
              <img src={github} alt='github' className='footer__icon' />
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
            >
              <img src={facebook} alt='facebook' className='footer__icon' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;