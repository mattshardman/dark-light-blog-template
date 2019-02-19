import React from 'react';
import PT from 'prop-types';
import Author from './Author';
import { WrapperStyle } from './consistentStyles';
import PostContainer from './PostContainer';

function Home({ color, dark }) {
  return (
    <main className="wrapper home">
      <Author
        dark={dark}
        color={color}
        avatarImage="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14022253_10153912515647615_4741379893801994498_n.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=e7844e44401729fba1e812131e3b9069&oe=5CE0DFB2" //eslint-disable-line
      />
      <PostContainer dark={dark} />
      <WrapperStyle />
      <style jsx>{`
          .home {
            box-sizing: border-box;
            padding-top: 120px;
            font-family: Roboto;
            width: 100%;
            color: ${color};
          }
        `}
      </style>
    </main>
  );
}

Home.propTypes = {
  color: PT.string.isRequired,
  dark: PT.bool.isRequired,
};
export default Home;
