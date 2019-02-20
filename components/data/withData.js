import React from 'react';
import PT from 'prop-types';
import Prismic from 'prismic-javascript';

function withData(Component) {
  class App extends React.Component {
    static async getInitialProps() {
      const apiEndpoint = 'https://boring-business.cdn.prismic.io/api/v2';

      const results = await Prismic.api(apiEndpoint);
      const posts = await results.query(
        Prismic.Predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' },
      );

      const reformattedPosts = posts.results.map((each) => {
        const body = each.data.body.map(d => d.text);

        return {
          id: each.id,
          title: each.data.title[0].text,
          date: each.data.date,
          snippet: each.data.snippet[0].text,
          body,
        };
      });

      return { reformattedPosts };
    }

    render() {
      const { reformattedPosts } = this.props;
      return (
        <Component
          postsData={reformattedPosts}
        />
      );
    }
  }

  App.propTypes = {
    reformattedPosts: PT.arrayOf(PT.object).isRequired,
  };

  return App;
}

export default withData;
