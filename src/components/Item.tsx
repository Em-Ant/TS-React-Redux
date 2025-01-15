import React from 'react';
import { Link } from 'react-router';

import styled from 'styled-components';

import Paper from './Paper';
import Delete from '../assets/delete.svg';

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
    display: flex;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background: none;
    transition: transform 0.1s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

interface ItemProps {
  name: string;
  index: number;
  remove: (i: number) => void;
}

const Item: React.FC<ItemProps> = ({ name, index, remove }) => (
  <ItemPaper>
    <div>
      <Link to={`/item/${index}`}>{name}</Link>
    </div>
    <button onClick={() => remove(index)}>
      <Delete height={18} width={18} />
    </button>
  </ItemPaper>
);

export default Item;
