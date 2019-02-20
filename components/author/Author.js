import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import PT from 'prop-types';

import AuthorStyle from './authorStyle';

const placeholder = (
  <div
    style={{
      backgroundColor: '#484848',
      height: 120,
      width: 120,
    }}
  />
);

const socialIcons = [{
  name: 'twitter',
  link: '',
  class: 'twitter',
},
{
  name: 'linkedin',
  link: 'https://uk.linkedin.com/in/nick-smith01',
  class: 'linkedin',
}];

function Author(props) {
  const {
    title, intro, avatarImage,
  } = props;

  return (
    <section className="author">
      <div className="main-section">
        <div className="avatar">
          <ProgressiveImage src={avatarImage} placeholder="">
            {(src, loading) => (loading ? placeholder : <img src={src} alt="me" height="100%" />)}
          </ProgressiveImage>
        </div>

        <div className="text">
          <h3>{title}</h3>
          <p>{intro}</p>
        </div>
      </div>

      <div className="social-media">
        { socialIcons.map(each => (
          <a
            href={each.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              key={each.name}
              className={`fab fa-${each.class}`}
              style={{ fontSize: 25, margin: '0 25px' }}
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
  intro: PT.string.isRequired,
  avatarImage: PT.string.isRequired,
  dark: PT.bool.isRequired,
  color: PT.string.isRequired,
};

export default Author;
