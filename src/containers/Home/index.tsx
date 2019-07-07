import React from 'react';

import { Link } from 'react-router-dom';

import Paper from '../../components/Paper';

import { Wrap, Buttons } from './styled';

import { connect } from 'react-redux';
import { deleteteItem, deleteAll } from '../../state/actions';

import { Dispatch } from 'redux';


interface HomeProps {
  items: any[],
  deleteItem: (i: number) => void,
  deleteAll:  () => void
}
const Home = ({ items, deleteItem, deleteAll }: HomeProps) => {
  const hasItems = !!(items && items.length);
  return (
    <Wrap>
      <h1>Items</h1>
      {hasItems ? (
        <ul>
          {items.map(({ id, name }, index) => (
            <li key={id}>
              <Paper>
                <Link to={`/item/${index}`}>{name}</Link>
                <button
                  onClick={() => deleteItem(index)}
                >
                  delete
                </button>
              </Paper>
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


const mapStateToProps = ({ items = [] }) => ({ items });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteItem: (index: number) => dispatch(deleteteItem(index)),
  deleteAll: () => dispatch(deleteAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
