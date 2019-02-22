import React from 'react';
import { theme } from './theme';

const withTheme = (Component) => {
  const WithTheme = props => <Component {...props} theme={theme} />;
  return WithTheme;
};

export default withTheme;
