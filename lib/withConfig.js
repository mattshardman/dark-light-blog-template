import React from 'react';
import { config } from './config';

const withConfig = (Component) => {
  const WithConfig = props => <Component {...props} {...config} />;
  return WithConfig;
};

export default withConfig;
