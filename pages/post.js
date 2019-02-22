import React from 'react';
import Head from 'next/head';
import PT from 'prop-types';

import Post from '../components/Post';

const PostPage = ({ dark, postsData, router }) => {
  const [specificPost] = postsData.filter(each => each.id === router.query.id);

  const title = specificPost ? specificPost.title : postsData[0].title;
  const content = specificPost ? specificPost.snippet : postsData[0].snippet;
  const post = specificPost || postsData[0];

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={content} />
      </Head>

      <Post
        dark={dark}
        specificPost={post}
      />
    </>
  );
};

PostPage.propTypes = {
  router: PT.shape().isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.object.isRequired).isRequired,
};

export default PostPage;
