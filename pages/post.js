import React, { useState } from 'react';
import PT from 'prop-types';
import { withRouter } from 'next/router';

import Post from '../components/Post';
import Header from '../components/header/Header';
import withData from '../components/data/withData';

const post = ({ router, postsData }) => {
  const isDark = router.query.dark === 'true'; //eslint-disable-line
  const [dark, setDark] = useState(isDark || false);

  const mainColor = '#30353d';
  const lightColor = '#f9fbff';

  const specificPost = postsData.filter((each) => {
    if (each.id === router.query.id) {
      return true;
    }
    return false;
  });

  return (
    <div className="post">
      <Header
        color={dark ? lightColor : mainColor}
        dark={dark}
        setDark={setDark}
      />
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
  postsData: PT.arrayOf({}).isRequired,
};

export default withData(withRouter(post));
