import styled from 'styled-components';

export const WS = styled.div`
  padding: 8px;
  margin: 8px;
  box-sizing: content-box;
  max-width: 600px;
  background-color: #f8f8f8;
  border-radius: 4px;
  border: solid 1px #999;
  & > p,
  & > span {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
  }
  & > span {
    margin-right: 8px;
  }
`;
