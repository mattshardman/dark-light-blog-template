import React, { useEffect } from 'react';
import PT from 'prop-types';

import Home from '../components/Home';
import withData from '../lib/withData';

import { colorScheme } from '../components/styles/colorScheme';

const index = ({ postsData, dark }) => {
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
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.shape().isRequired).isRequired,
};

export default withData(index);
