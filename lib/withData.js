import React from 'react';
import { withRouter } from 'next/router';
import PT from 'prop-types';
import Prismic from 'prismic-javascript';
import Header from '../components/header/Header';

import { reformatIncomingPostData } from './utils/utilFunctions';

function withData(Component) {
  class App extends React.Component {
    constructor(props) {
      super(props);
      const { dark } = props.router.query;
      this.state = {
        dark: dark === 'true' || false,
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
      const { reformattedPosts } = this.props;
      return (
        <>
          <Header
            dark={dark}
            setDark={() => this.setState({ dark: !dark })}
          />
          <Component
            {...this.props}
            {...this.state}
            postsData={reformattedPosts}
          />
        </>
      );
    }
  }

  App.propTypes = {
    reformattedPosts: PT.arrayOf(PT.object).isRequired,
    router: PT.shape().isRequired,
  };

  return withRouter(App);
}

export default withData;
