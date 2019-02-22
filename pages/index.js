import React from 'react';
import Head from 'next/head';
import PT from 'prop-types';

import Home from '../components/Home';

import { authorData } from '../components/authorData';
import withTheme from '../lib/withTheme';

const index = ({ postsData, dark, theme }) => {
  const { darkColor, lightColor } = theme;
  return (
    <>
      <Head>
        <title key="title">Boring.business - blog about businesses</title>
        <meta key="description" name="description" content={authorData.intro} />
      </Head>
      <Home
        color={dark ? darkColor : lightColor}
        dark={dark}
        postsData={postsData}
      />
    </>
  );
};

index.propTypes = {
  theme: PT.shape(PT.string).isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.shape().isRequired).isRequired,
};

export default withTheme(index);
