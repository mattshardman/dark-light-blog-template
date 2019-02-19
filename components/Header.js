import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

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
    <header className="header">
      <div className="logo-section">
        <img src="https://image.flaticon.com/icons/svg/865/865779.svg" alt="" height={40} />
        <h1>Boring Business</h1>
      </div>
      <div className="switch">
        <div className="dark">
          <i
            className="fas fa-moon"
            style={{ fontSize: 14, color: '#fff' }}
          />
        </div>
        <div className="light">
          <i
            className="fas fa-sun"
            style={{ fontSize: 14, color: '#fff' }}
          />
        </div>
        <button
          type="button"
          className="slider"
          onClick={() => setDark(!dark)}
        />
      </div>
      <style jsx>{`
            .header {
                position: fixed;
                background: ${dark ? '#30353d' : '#f9fbff'};
                font-family: Roboto;
                box-sizing: border-box;
                width: 100%;
                padding: 0 25%;
                height: ${isScrolled ? '60px' : '100px'};
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: ${color};
                transition: height 420ms;
            }

            .logo-section {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 350px;
            }

            .switch {
                display: flex;
                position: relative;
                width: 60px;
                height: 30px;
                border-radius: 15px;
                background: #000;
            }

            .slider {
                position: absolute;
                height: 30px;
                width: 30px;
                border-radius: 15px;
                background: #fff;
                outline: none;
                border: 3px #000 solid;
                transition: transform 400ms;
                transform: translateX(${dark ? '0%' : '100%'});
                cursor: pointer;
            }

            .dark {
                display: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                right: 0;
            }

            .light {
                display: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                left: 0;
            }

            h1 {
                font-size: 40px;
                opacity: ${isScrolled ? 0 : 1};
                transition: opacity 420ms;
            }
        `}
      </style>
    </header>
  );
}

Header.propTypes = {
  color: PT.string.isRequired,
  dark: PT.string.isRequired,
  setDark: PT.func.isRequired,
};

export default Header;
