import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import PT from 'prop-types';

import AuthorStyle from './authorStyle';

const placeholder = (
  <div
    style={{
      backgroundColor: '#484848',
      height: '100%',
      width: '100%',
    }}
  />
);

const socialIcons = [{
  name: 'twitter',
  link: 'https://twitter.com/nrhsmith',
  class: 'twitter',
},
{
  name: 'linkedin',
  link: 'https://uk.linkedin.com/in/nick-smith01',
  class: 'linkedin',
}];

function Author(props) {
  const {
    title, subTitle, intro, avatarImage, minimize,
  } = props;

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
  title: PT.string.isRequired,
  subTitle: PT.string.isRequired,
  intro: PT.string.isRequired,
  avatarImage: PT.string.isRequired,
  dark: PT.bool.isRequired,
  minimize: PT.bool,
};

Author.defaultProps = {
  minimize: false,
};

export default Author;
