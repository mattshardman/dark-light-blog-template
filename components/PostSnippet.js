import React from 'react';
import Link from 'next/link';
import PT from 'prop-types';

import { getTimeToRead, getTimeSincePost } from '../lib/utils/utilFunctions';
import withTheme from '../lib/withTheme';

function PostSnippet({
  dark, id, title, date, snippet, body, theme,
}) {
  const { textColorForDark, textColorForLight, altColors } = theme;
  const timeToRead = getTimeToRead(body);

  return (
    <article className="article">
      <Link
        prefetch
        href={{ pathname: 'post', query: { id, dark } }}
      >
        <h1>{title}</h1>
      </Link>

      <small>{getTimeSincePost(date)} - {timeToRead} minute read</small>

      <p>{snippet}</p>

      <style jsx>{`
        .article {
          padding: 10px 0;
        }

        h1 {
          color: ${dark ? textColorForDark : textColorForLight};
          font-weight: 700;
          font-size: 35px;
          margin: 10px 0;
          cursor: pointer;
        }

        small {
          color: ${altColors[0]};
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
  body: PT.arrayOf(PT.string).isRequired,
  theme: PT.shape(PT.string.isRequired).isRequired,
};

export default withTheme(PostSnippet);
