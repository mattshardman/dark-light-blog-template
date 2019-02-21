import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PT from 'prop-types';
import { WrapperStyle } from '../styles/consistentStyles';
import Switch from './Switch';

function Header({ color, dark, setDark }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        return setIsScrolled(true);
      }

      if (!window.scrollY) {
        return setIsScrolled(false);
      }
      return setIsScrolled(false);
    });
  });

  return (
    <header className="wrapper header">
      <Link prefetch href={{ pathname: '/', query: { dark } }}>
        <div className="logo-section">
          <img
            src={!dark ? 'https://image.flaticon.com/icons/svg/865/865779.svg'
          : 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550592004/nick-blog/moon-white.png'} //eslint-disable-line
            alt=""
            height={40}
          />
          <h1>Boring Business</h1>
        </div>
      </Link>

      <Switch
        dark={dark}
        setDark={setDark}
      />

      <WrapperStyle />

      <style jsx>{`
            .header {
                position: fixed;
                z-index: 1000;
                box-sizing: border-box;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: ${color};
                background: ${dark ? '#30353d' : '#f9fbff'};
                height: ${isScrolled ? '60px' : '100px'};
                border-bottom:  ${isScrolled ? '1px #ddd solid' : 'none'};
                transition: height 420ms, background 420ms, border-bottom 420ms;
            }

            .logo-section {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 350px;
                cursor: pointer;
            }

            h1 {
                font-size: 40px;
                opacity: ${isScrolled ? 0 : 1};
                transition: font-size 420ms, opacity 420ms;
            }

            @media (max-width: 900px) {
              .logo-section {
                width: 220px;
              }
              h1 {
                font-size: 22px;
              }
            }
        `}
      </style>
    </header>
  );
}

Header.propTypes = {
  color: PT.string.isRequired,
  dark: PT.bool.isRequired,
  setDark: PT.func.isRequired,
};

export default Header;
