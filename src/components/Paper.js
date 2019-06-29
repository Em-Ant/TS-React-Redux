import React from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';

import styled from 'styled-components';

const PaperWrap = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 3px rgba(0,0,0,0.2), 0 -1px 2px -1px rgba(0,0,0,0.1);
  border-radius: 8px; 
  max-width: 450px;
  padding: 16px;
  margin: 8px auto;
  position: relative;
`;

const Paper = ({ children }) => (
  <PaperWrap>
    {children}
  </PaperWrap>
);

Paper.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ])
};

export default Paper;