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

    render() {
      const { dark } = this.state;
      return (
        <>
          <Header
            dark={dark}
            setDark={() => this.setState({ dark: !dark })}
          />
          <Component
            {...this.props}
            {...this.state}
          />
        </>
      );
    }
  }

  App.propTypes = {
    router: PT.shape().isRequired,
  };

  return withRouter(App);
}

export default withData;
