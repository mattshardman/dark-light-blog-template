import React from 'react';
import PT from 'prop-types';
import { WrapperStyle } from './styles/consistentStyles';
import Author from './author/Author';

import { bodyParser, getTimeToRead, getTimeSincePost } from '../lib/utils/utilFunctions';
import withTheme from '../lib/withTheme';
import SignUp from './SignUp';

function Post(props) {
  const { dark, specificPost, theme } = props;
  const { textColorForDark, textColorForLight, altColors } = theme;
  const {
    title, date, body, jsxBody,
  } = specificPost;

  const timeToRead = getTimeToRead(body);

  return (
    <article className="wrapper article">
      <h1>{title}</h1>

      <small>{getTimeSincePost(date)} - {timeToRead} minute read</small>

      <div className="body">
        {jsxBody.map(each => bodyParser(each))}
      </div>

      <SignUp />

      <Author
        minimize
        {...props}
      />

      <WrapperStyle />
      <style jsx>{`
        .article {
          box-sizing: border-box;
          padding-top: 120px;
          padding-bottom: 60px;
          color: ${dark ? textColorForDark : textColorForLight};
        }

        .body {
          box-sizing: border-box;
          width: 100%;
          padding: 40px 0;
        }

        a {
          text-decoration: none;
          color: ${dark ? textColorForDark : textColorForLight};
        }

        h1 {
          font-weight: 700;
          font-size: 35px;
          margin: 10px 0;
        }

        small {
          color: ${altColors[0]};
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
  theme: PT.shape(PT.string.isRequired).isRequired,
  dark: PT.bool.isRequired,
  specificPost: PT.shape({
    title: PT.string.isRequired,
    date: PT.string.isRequired,
    body: PT.arrayOf(PT.string).isRequired,
  }).isRequired,
};

export default withTheme(Post);
