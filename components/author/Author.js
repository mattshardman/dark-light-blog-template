import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import PT from 'prop-types';

import AuthorStyle from './authorStyle';
import withConfig from '../../lib/withConfig';

const placeholder = (
  <div
    style={{
      backgroundColor: '#484848',
      height: '100%',
      width: '100%',
    }}
  />
);

function Author(props) {
  const { author, minimize } = props;
  const {
    title, subTitle, intro, avatarImage, socialIcons,
  } = author;

  return (
    <section className="author-card">
      <div className="title-section">
        <div className="avatar">
          <ProgressiveImage src={avatarImage} placeholder="">
            {(src, loading) => (loading ? placeholder : <img src={src} alt="me" height="100%" />)}
          </ProgressiveImage>
        </div>

        <div className="title">
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>

      { !minimize
      && (
      <div className="intro-section">
        <p>{intro}</p>
      </div>
      )
      }

      <div className="social-media">
        { socialIcons.map(each => (
          <a
            key={each.name}
            href={each.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`fab fa-${each.class}`}
              style={{ fontSize: 25, marginLeft: 50 }}
            />
          </a>
        )) }
      </div>

      <AuthorStyle {...props} />
    </section>
  );
}

Author.propTypes = {
  author: PT.shape({
    title: PT.string.isRequired,
    subTitle: PT.string.isRequired,
    intro: PT.string.isRequired,
    avatarImage: PT.string.isRequired,
  }).isRequired,

  dark: PT.bool.isRequired,
  minimize: PT.bool,
};

Author.defaultProps = {
  minimize: false,
};

export default withConfig(Author);
