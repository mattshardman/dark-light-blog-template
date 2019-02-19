import React from 'react';
import PT from 'prop-types';
import Author from './Author';

function Home({ color, dark }) {
  return (
    <main className="home">
      <Author
        dark={dark}
        color={color}
        avatarImage="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14022253_10153912515647615_4741379893801994498_n.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=e7844e44401729fba1e812131e3b9069&oe=5CE0DFB2" //eslint-disable-line
      />
      <style jsx>{`
          .home {
            box-sizing: border-box;
            padding: 0 25%;
            padding-top: 120px;
            font-family: Roboto;
            width: 100%;
            height: 150vh;
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
