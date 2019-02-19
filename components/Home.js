import React from 'react';
import PT from 'prop-types';
import Author from './author/Author';
import { WrapperStyle } from './consistentStyles';
import PostContainer from './PostContainer';

const authorData = {
  title: 'Nick Smith',
  intro: "Hi I'm Nick and I write about businesses and what not. Here are some articles I went and wrote, oh boy I do hope you like them",
  avatarImage: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550600238/nick-blog/nick.png',
};

function Home(props) {
  const { color } = props;

  return (
    <main className="wrapper home">
      <Author
        {...props}
        {...authorData}
      />
      <PostContainer {...props} />
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
  postsData: PT.arrayOf({}).isRequired,
};
export default Home;
