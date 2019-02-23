import React from 'react';
import PT from 'prop-types';
import Author from './author/Author';
import { WrapperStyle } from './styles/consistentStyles';
import PostContainer from './PostContainer';

import withTheme from '../lib/withTheme';

function Home(props) {
  const { theme, dark } = props;
  const { fontFamily, textColorForDark, textColorForLight } = theme;

  return (
    <main className="wrapper home">
      <Author
        {...props}
      />

      <PostContainer {...props} />

      <WrapperStyle />

      <style jsx>{`
          .home {
            font-family: ${fontFamily};
            box-sizing: border-box;
            padding-top: 120px;
            width: 100%;
            color: ${dark ? textColorForDark : textColorForLight};
          }
        `}
      </style>
    </main>
  );
}

Home.propTypes = {
  theme: PT.shape(PT.string.isRequired).isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.object).isRequired,
};

export default withTheme(Home);
