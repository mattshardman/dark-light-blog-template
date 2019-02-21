import React from 'react';
import PT from 'prop-types';

import Post from '../components/Post';
import withData from '../lib/withData';

import { colorScheme } from '../components/styles/colorScheme';

const post = ({ dark, postsData, router }) => {
  const { mainColor, lightColor } = colorScheme;

  const specificPost = postsData.filter((each) => {
    if (each.id === router.query.id) {
      return true;
    }
    return false;
  });

  return (
    <div className="post">
      <Post
        dark={dark}
        specificPost={specificPost[0] || postsData[0]}
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
  postsData: PT.arrayOf({}).isRequired,
};

export default withData(post);
