import React from 'react';
import App, { Container } from 'next/app';
import { withRouter } from 'next/router';
import Prismic from 'prismic-javascript';

import { reformatIncomingPostData } from '../lib/utils/utilFunctions';
import { config } from '../lib/config';
import Header from '../components/header/Header';
import { theme } from '../lib/theme';

class MyApp extends App {
  constructor(props) {
    super(props);
    const { dark } = props.router.query;
    this.state = {
      dark: dark === 'dark' || true,
    };
  }

  static async getInitialProps() {
    const apiEndpoint = config.apiURL;

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
    const { darkColor, lightColor } = theme;

    return (
      <Container>
        <Header
          dark={dark}
          setDark={() => this.setState({ dark: !dark })}
        />
        <div className="main">
          <Component
            postsData={reformattedPosts}
            {...this.props}
            {...this.state}
          />
        </div>

        <style jsx>{`
          .main {
            min-height: 100vh;
            box-sizing: border-box;
            width: 100%;
            background: ${dark ? darkColor : lightColor};
            transition: background 420ms;
          }
        `}
        </style>
      </Container>
    );
  }
}

export default withRouter(MyApp);
