import React from 'react';

import { Link } from 'react-router-dom';

import Item from '../../components/Item';
import { Item as ItemModel } from '../../models';

import { Wrap, Buttons } from './styled';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  deleteItem,
  deleteAll,
  DeleteActions
} from '../../state/actions';

interface HomeProps {
  items: ItemModel[];
  deleteItem: (i: number) => void;
  deleteAll:  () => void;
}
const Home: React.FC<HomeProps> = ({ items, deleteItem, deleteAll }) => {
  const hasItems = !!(items && items.length);
  return (
    <Wrap>
      <h1>Items</h1>
      {hasItems ? (
        <ul>
          {items.map(({ id, name }, index) => (
            <li key={id}>
              <Item
                remove={deleteItem}
                name={name}
                index={index}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here yet...</p>
      )}
      <Buttons>
        <Link to="/item/new">Add</Link>
        {hasItems && <button onClick={deleteAll}>Clear</button>}
      </Buttons>
    </Wrap>
  );
};


const mapStateToProps = ({ items = [] }:  { items: ItemModel[] }) => ({ items });
const mapDispatchToProps = (dispatch: Dispatch<DeleteActions>) => ({
  deleteItem: (index: number) => dispatch(deleteItem(index)),
  deleteAll: () => dispatch(deleteAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
