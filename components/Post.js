import React from 'react';
import PT from 'prop-types';
import { WrapperStyle } from './styles/consistentStyles';

import { bodyParser, getTimeToRead, getTimeSincePost } from '../lib/utils/utilFunctions';

function Post({ dark, specificPost }) {
  const {
    title, date, body, jsxBody,
  } = specificPost;

  const timeToRead = getTimeToRead(body);

  return (
    <article className="wrapper article">
      <h1>{title}</h1>

      <small>{getTimeSincePost(date)} - {timeToRead} minute read</small>

      {jsxBody.map(each => bodyParser(each))}

      <WrapperStyle />
      <style jsx>{`
        .article {
          box-sizing: border-box;
          padding-top: 120px;
          padding-bottom: 60px;
          color: ${dark ? '#fff' : '#484848'};
        }

        a {
          text-decoration: none;
          color: ${dark ? '#fff' : '#484848'};
        }

        h1 {
          font-weight: 700;
          font-size: 35px;
          margin: 10px 0;
        }

        small {
          color: #1ca8ff;
        }

        div, p {
          text-align: justify;
        }
      `}
      </style>
    </article>
  );
}

Post.propTypes = {
  dark: PT.bool.isRequired,
  specificPost: PT.shape({
    title: PT.string.isRequired,
    date: PT.string.isRequired,
    body: PT.arrayOf(PT.string.isRequired).isRequired,
  }).isRequired,
};

export default Post;
