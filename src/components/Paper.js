import React from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';

import styles from './paper.module.css';

const Paper = ({ children }) => (
  <div className={styles.paper}>
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