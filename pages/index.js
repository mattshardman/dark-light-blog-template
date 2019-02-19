import React, { useState } from 'react';
import Home from '../components/Home';
import Header from '../components/Header';

export default () => {
  const [dark, setDark] = useState(false);
  const mainColor = '#30353d';
  const lightColor = '#f9fbff';

  return (
    <div className="home">
      <Header
        color={dark ? lightColor : mainColor}
        dark={dark}
        setDark={setDark}
      />
      <Home
        color={dark ? lightColor : mainColor}
        dark={dark}
      />
      <style jsx>{`
      .home {
        min-height: 100vh;
        box-sizing: border-box;
        width: 100%;
        background: ${dark ? mainColor : lightColor};
        transition: background 420ms;
      }
        `}
      </style>
    </div>
  );
};
