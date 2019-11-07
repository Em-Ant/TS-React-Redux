import React, { ReactNode } from 'react';
import styled from 'styled-components';

const PaperWrap = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 -1px 1px -1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 450px;
  padding: 16px;
  margin: 8px auto;
  position: relative;
`;

interface PaperProps {
  children: ReactNode;
  className?: string;
}

const Paper: React.FC<PaperProps> = ({ className, children }) => (
  <PaperWrap className={className}>{children}</PaperWrap>
);

export default Paper;
