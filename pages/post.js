import React from 'react';
import Head from 'next/head';
import PT from 'prop-types';

import Post from '../components/Post';

const post = ({ dark, postsData, router }) => {
  const specificPost = postsData.filter((each) => {
    if (each.id === router.query.id) {
      return true;
    }
    return false;
  })[0];

  return (
    <>
      <Head>
        <title key="title">{specificPost.title}</title>
        <meta key="description" name="description" content={specificPost.snippet} />
      </Head>

      <Post
        dark={dark}
        specificPost={specificPost || postsData[0]}
      />
    </>
  );
};

post.propTypes = {
  router: PT.shape().isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.object.isRequired).isRequired,
};

export default post;
