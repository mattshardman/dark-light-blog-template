import React from 'react';
import PT from 'prop-types';
import PostSnippet from './PostSnippet';

function PostContainer({ dark }) {
  return (
    <main className="post-container">
      <h3>Posts</h3>
      <PostSnippet
        dark={dark}
        title="Why stuff happens"
        date="18 Feb 2019"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellat obcaecati laudantium, quam omnis mollitia repudiandae porro ipsa, veniam reiciendis magnam veritatis tempora eos animi odio labore eius quo quaerat."
      />
      <PostSnippet
        dark={dark}
        title="Why stuff happens"
        date="16 Feb 2019"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellat obcaecati laudantium, quam omnis mollitia repudiandae porro ipsa, veniam reiciendis magnam veritatis tempora eos animi odio labore eius quo quaerat."
      />
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
  dark: PT.string.isRequired,
};

export default PostContainer;
