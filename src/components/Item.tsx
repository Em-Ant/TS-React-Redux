import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Paper from './Paper';

const ItemPaper = styled(Paper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    flex-grow: 2;
    a {
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: #172c3f;
        text-decoration: underline;
      }
    }
  }
  button {
    flex-grow: 0;
    border-radius: 3px;
    background-color: #ecf0f1;
    border: 1px solid #bdc3c7;
    color: #444;
    padding: 4px 3px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: white;
    }
  }
`;

interface ItemProps {
  name: string;
  index: number;
  remove: (i: number) => void;
}

const Item = ({ name, index, remove }: ItemProps) => (
  <ItemPaper>
    <div>
      <Link to={`/item/${index}`}>{name}</Link>
    </div>
    <button onClick={() => remove(index)}>delete</button>
  </ItemPaper>
);

export default Item;
