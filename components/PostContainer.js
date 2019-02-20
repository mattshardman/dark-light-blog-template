import React from 'react';
import PT from 'prop-types';
import PostSnippet from './PostSnippet';

function PostContainer({ dark, postsData }) {
  return (
    <main className="post-container">
      <h3>Posts</h3>
      {
        postsData.map(post => (
          <PostSnippet
            key={post.id}
            dark={dark}
            {...post}
          />
        ))
      }

      <style jsx>{`
        .post-container {
          padding-top: 30px;
          color: ${dark ? '#fff' : '#30353d'};
          width: 100%;
        }

        h3 {
          padding: 0;
          margin: 0;
        }
      `}
      </style>
    </main>
  );
}

PostContainer.propTypes = {
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.object).isRequired,
};

export default PostContainer;
