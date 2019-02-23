import React from 'react';
import Head from 'next/head';
import PT from 'prop-types';

import Home from '../components/Home';
import withConfig from '../lib/withConfig';

const index = ({ postsData, dark, author }) => (
  <>
    <Head>
      <title key="title">Boring.business - blog about businesses</title>
      <meta key="description" name="description" content={author.into} />
    </Head>
    <Home
      dark={dark}
      postsData={postsData}
    />
  </>
);

index.propTypes = {
  author: PT.shape(PT.string).isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.shape().isRequired).isRequired,
};

export default withConfig(index);
