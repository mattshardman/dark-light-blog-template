import React from 'react';
import PT from 'prop-types';
import PostSnippet from './PostSnippet';
import withTheme from '../lib/withTheme';

function PostContainer({ dark, postsData, theme }) {
  const { textColorForDark, textColorForLight, altColors } = theme;
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
          color: ${dark ? textColorForDark : textColorForLight};
          width: 100%;
        }

        h3 {
          color: ${altColors[1]};
          padding: 0;
          margin: 0;
        }
      `}
      </style>
    </main>
  );
}

PostContainer.propTypes = {
  theme: PT.shape(PT.string.isRequired).isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.object).isRequired,
};

export default withTheme(PostContainer);
