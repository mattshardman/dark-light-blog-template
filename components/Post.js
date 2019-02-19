import React from 'react';
import moment from 'moment';
import PT from 'prop-types';
import uuid from 'uuid';
import { WrapperStyle } from './consistentStyles';

const dateFunction = date => moment(new Date(date)).startOf('day').fromNow();

function Post({ dark, specificPost }) {
  const { title, date, body } = specificPost;
  const timeToRead = Math.round(body.toString().split(' ').length / 200);
  return (
    <article className="wrapper article">
      <h1>{title}</h1>
      <small>{dateFunction(date)} - {timeToRead} minute read</small>

      {body.map(each => <p key={uuid()}>{each}</p>)}

      <WrapperStyle />
      <style jsx>{`
        .article {
          box-sizing: border-box;
          padding-top: 120px;
        }

        a {
          text-decoration: none;
          color: ${dark ? '#fff' : '#484848'};
        }

        h1 {
          color: ${dark ? '#fff' : '#484848'};
          font-weight: 700;
          font-size: 35px;
          margin: 10px 0;
        }

        small {
          color: #1ca8ff;
        }

        p {
          color: ${dark ? '#fff' : '#484848'};
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
