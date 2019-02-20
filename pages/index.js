import React, { useState, useEffect } from 'react';
import PT from 'prop-types';
import { withRouter } from 'next/router';

import Home from '../components/Home';
import Header from '../components/header/Header';
import withData from '../components/data/withData';

import { colorScheme } from '../components/colorScheme';

const index = ({ router, postsData }) => {
  const isDark = router.query.dark === 'true' || false; //eslint-disable-line
  const [dark, setDark] = useState(isDark || false);

  const { mainColor, lightColor } = colorScheme;

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(() => {
          console.log('Yes, it did.');
        }).catch((err) => {
          console.log("No it didn't. This happened: ", err);
        });
    }
  }, []);

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
        postsData={postsData}
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

index.propTypes = {
  router: PT.shape().isRequired,
  postsData: PT.arrayOf(PT.shape().isRequired).isRequired,
};

export default withData(withRouter(index));
