import React from 'react';
import { withRouter } from 'next/router';
import PT from 'prop-types';
import Prismic from 'prismic-javascript';
import Header from '../components/header/Header';

import { colorScheme } from '../components/styles/colorScheme';

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

      const reformattedPosts = posts.results.map((each) => {
        const body = each.data.body.map(d => d.text);
        const jsxBody = each.data.body.map(d => ({ id: each.id, ...d }));

        return {
          id: each.id,
          title: each.data.title[0].text,
          date: each.data.date,
          snippet: each.data.snippet[0].text,
          body,
          jsxBody,
        };
      });

      return { reformattedPosts };
    }

    render() {
      const { dark } = this.state;
      const { reformattedPosts } = this.props;
      const { mainColor, lightColor } = colorScheme;
      return (
        <>
          <Header
            color={dark ? lightColor : mainColor}
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
