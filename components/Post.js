import React from 'react';
import PT from 'prop-types';
import { RichText } from 'prismic-reactjs';

import { WrapperStyle } from './styles/consistentStyles';
import Author from './author/Author';
import SignUp from './signUp/SignUp';

import { getTimeToRead, getTimeSincePost, htmlSerializer } from '../lib/utils/utilFunctions';
import withTheme from '../lib/withTheme';

function Post(props) {
  const { dark, specificPost, theme } = props;
  const {
    fontFamily, textColorForDark, textColorForLight, altColors,
  } = theme;
  const {
    title, date, body, orgBody,
  } = specificPost;

  const timeToRead = getTimeToRead(body);

  return (
    <article className="wrapper article">
      <h1>{title}</h1>
      <small>{getTimeSincePost(date)} - {timeToRead} minute read</small>
      <div className="body">
        {RichText.render(orgBody, doc => doc.id, htmlSerializer)}
      </div>

      <SignUp />

      <Author
        minimize
        {...props}
      />

      <WrapperStyle />
      <style jsx>{`
        .article {
          font-family: ${fontFamily};
          box-sizing: border-box;
          padding-top: 120px;
          padding-bottom: 60px;
          color: ${dark ? textColorForDark : textColorForLight};
        }

        .body {
          box-sizing: border-box;
          width: 100%;
          padding: 20px 0;
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
