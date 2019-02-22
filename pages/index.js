import React from 'react';
import Head from 'next/head';
import PT from 'prop-types';

import Home from '../components/Home';

import { authorData } from '../components/authorData';
import { colorScheme } from '../components/styles/colorScheme';

const index = ({ postsData, dark }) => {
  const { mainColor, lightColor } = colorScheme;

  return (
    <div className="home">
      <Head>
        <title key="title">Boring.business - blog about businesses</title>
        <meta key="description" name="description" content={authorData.intro} />
      </Head>
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

export default index;
