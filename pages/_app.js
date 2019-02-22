import React from 'react';
import App, { Container } from 'next/app';
import { withRouter } from 'next/router';
import Prismic from 'prismic-javascript';

import { reformatIncomingPostData } from '../lib/utils/utilFunctions';
import Header from '../components/header/Header';

class MyApp extends App {
  constructor(props) {
    super(props);
    const { dark } = props.router.query;
    this.state = {
      dark: dark === 'dark' || true,
    };
  }

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
    const { dark } = this.state;
    const { Component, reformattedPosts } = this.props;

    return (
      <Container>
        <Header
          dark={dark}
          setDark={() => this.setState({ dark: !dark })}
        />
        <Component
          postsData={reformattedPosts}
          {...this.props}
          {...this.state}
        />
      </Container>
    );
  }
}

export default withRouter(MyApp);
