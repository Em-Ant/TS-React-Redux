import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';

import { Link } from 'react-router-dom';

import Paper from '../components/Paper';

import { connect } from 'react-redux';
import { deleteteItem, deleteAll } from '../state/actions';


const Home = ({ items, deleteItem, deleteAll }) => {
  const hasItems = !!(items && items.length);
  return (
    <div>
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
      <div>
        <Link to="/item/new">Add</Link>
        {hasItems && <button onClick={deleteAll}>Clear</button>}
      </div>
    </div>
  );
};

Home.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      description: string,
      id: string
    })
  ).isRequired,
  deleteItem: func.isRequired,
  deleteAll: func.isRequired
};

const mapStateToProps = ({ items = [] }) => ({ items });
const mapDispatchToProps = dispatch => ({
  deleteItem: index => dispatch(deleteteItem(index)),
  deleteAll: () => dispatch(deleteAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
