import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import PT from 'prop-types';

function PostSnippet({
  dark, id, title, date, snippet, body,
}) {
  const timeToRead = Math.round(body.toString().split(' ').length / 200);

  return (
    <article className="article">
      <Link href={{ pathname: 'post', query: { id, dark } }}>
        <h1>{title}</h1>
      </Link>
      <small>{moment(new Date(date)).startOf('day').fromNow()} - {timeToRead} minute read</small>
      <p>{snippet}</p>
      <style jsx>{`
        .article {
          padding: 10px 0;
        }

        h1 {
          color: ${dark ? '#fff' : '#484848'};
          font-weight: 700;
          font-size: 35px;
          margin: 10px 0;
          cursor: pointer;
        }

        small {
          color: #1ca8ff;
        }

        p {
          margin: 15px 0;
          text-align: justify;
        }
      `}
      </style>
    </article>
  );
}

PostSnippet.propTypes = {
  id: PT.string.isRequired,
  dark: PT.bool.isRequired,
  title: PT.string.isRequired,
  date: PT.string.isRequired,
  snippet: PT.string.isRequired,
  body: PT.arrayOf(PT.string.isRequired).isRequired,
};

export default PostSnippet;
