import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  margin: 0 auto;
  max-width: 400px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 8px;
  &:not(:first-child) {
    margin-top: 16px;
  }
`;
