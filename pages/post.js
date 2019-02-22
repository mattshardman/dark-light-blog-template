import React from 'react';
import Head from 'next/head';
import PT from 'prop-types';

import Post from '../components/Post';

import { colorScheme } from '../components/styles/colorScheme';

const post = ({ dark, postsData, router }) => {
  const { mainColor, lightColor } = colorScheme;

  const specificPost = postsData.filter((each) => {
    if (each.id === router.query.id) {
      return true;
    }
    return false;
  })[0];

  return (
    <div className="post">
      <Head>
        <title key="title">{specificPost.title}</title>
        <meta key="description" name="description" content={specificPost.snippet} />
      </Head>

      <Post
        dark={dark}
        specificPost={specificPost || postsData[0]}
      />

      <style jsx>{`
        .post {
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

post.propTypes = {
  router: PT.shape().isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.object.isRequired).isRequired,
};

export default post;
