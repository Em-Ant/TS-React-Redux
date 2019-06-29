import styled from 'styled-components';

export const Head = styled.div`
  h3 {
    text-align: center;
  }
  a {
    display: block;
    text-decoration: none;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #666;
    font-size: 14px;
    background-color: #ecf0f1;
    border: 1px solid #bdc3c7;
    box-sizing: border-box;
    text-align: center;
    padding: 2px 8px;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: white;
    }
  }
`;
