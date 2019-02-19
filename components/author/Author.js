import React from 'react';
import PT from 'prop-types';
import AuthorStyle from './authorStyle';


function Author(props) {
  const {
    title, intro,
  } = props;
  return (
    <section className="author">
      <div className="avatar" />
      <div className="text">
        <h3>{title}</h3>
        <p>{intro}</p>
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
