import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PT from 'prop-types';
import { WrapperStyle } from '../styles/consistentStyles';
import Switch from './Switch';
import withConfig from '../../lib/withConfig';
import withTheme from '../../lib/withTheme';

function Header({
  header, theme, dark, setDark,
}) {
  const {
    title, titleImgForDark, titleImgForLight, capitalize,
  } = header;

  const { headerFontFamily } = theme;

  const [isScrolled, setIsScrolled] = useState(false);

  const titleText = capitalize ? title.toUpperCase() : title;

  const handleScroll = () => {
    if (window.scrollY > 100) return setIsScrolled(true);

    if (!window.scrollY) return setIsScrolled(false);
    return setIsScrolled(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="wrapper header">
      <Link
        prefetch
        href={{
          pathname: '/',
          query: { dark },
        }}
      >
        <div className="logo-section">
          <img
            src={dark
              ? titleImgForDark
              : titleImgForLight
            }
            alt=""
            height={40}
          />
          <h1>{titleText}</h1>
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
                font-family: ${headerFontFamily};
                z-index: 1000;
                box-sizing: border-box;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: ${dark ? '#fff' : '#484848'};
                background: ${dark ? theme.darkColor : theme.lightColor };
                height: ${isScrolled ? '60px' : '100px'};
                border-bottom:  ${isScrolled ? '1px #ddd solid' : 'none'};
                transition: height 420ms, background 420ms, border-bottom 420ms;
            }

            .logo-section {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                cursor: pointer;
            }

            h1 {
                margin-left: 20px;
                font-size: 40px;
                opacity: ${isScrolled ? 0 : 1};
                transition: font-size 420ms, opacity 420ms;
            }

            @media (max-width: 900px) {
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
  header: PT.shape(PT.object).isRequired,
  theme: PT.shape(PT.string).isRequired,
  dark: PT.bool.isRequired,
  setDark: PT.func.isRequired,
};

export default withConfig(withTheme(Header));
