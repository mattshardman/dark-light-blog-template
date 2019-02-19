import React from 'react';
import moment from 'moment';
import PT from 'prop-types';

function PostSnippet({
  dark, title, date, body,
}) {
  const timeToRead = body.split(' ').length / 30;
  return (
    <article className="article">
      <a href="">
        <h1>{title}</h1>
      </a>
      <small>{moment(date).startOf('day').fromNow()} - {timeToRead} minute read</small>
      <p>{body}</p>
      <style jsx>{`
        .article {
          padding: 10px 0;
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

        p {
          text-align: justify;
        }
      `}
      </style>
    </article>
  );
}

PostSnippet.propTypes = {
  dark: PT.bool.isRequired,
  title: PT.string.isRequired,
  date: PT.string.isRequired,
  body: PT.string.isRequired,
};

export default PostSnippet;
