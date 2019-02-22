import React from 'react';
import App, { Container } from 'next/app';
import { withRouter } from 'next/router';
import Prismic from 'prismic-javascript';

import { reformatIncomingPostData } from '../lib/utils/utilFunctions';

class MyApp extends App {
  static async getInitialProps() {
    const apiEndpoint = 'https://boring-business.cdn.prismic.io/api/v2';

    const results = await Prismic.api(apiEndpoint);
    const posts = await results.query(
      Prismic.Predicates.at('document.type', 'post'),
      { orderings: '[my.post.date desc]' },
    );

    const reformattedPosts = reformatIncomingPostData(posts);

    return { reformattedPosts };
  }

  render() {
    const { Component, reformattedPosts } = this.props;
    console.log(reformattedPosts);
    return (
      <Container>
        <Component postsData={reformattedPosts} {...this.props} />
      </Container>
    );
  }
}

export default withRouter(MyApp);
