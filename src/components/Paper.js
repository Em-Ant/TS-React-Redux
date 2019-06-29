import React from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';

const Paper = ({ children }) => (
  <div>
    {children}
  </div>
);

Paper.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ])
};

export default Paper;