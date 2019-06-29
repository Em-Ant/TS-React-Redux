import React, { useState } from 'react';
import { string, bool, shape, func } from 'prop-types';
import { connect } from 'react-redux';

import { Redirect, Link } from 'react-router-dom';

import ItemForm from '../components/ItemForm';
import Paper from '../components/Paper';

import { addItem, editItem } from '../state/actions';

const Container = ({ invalid, item, submit, isNewItem }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = payload => {
    submit(payload);
    setSubmitted(true);
  };
  if (submitted || invalid) return <Redirect to="/home" />;
  const title = isNewItem ? 'Add Item' : 'Edit Item';
  return (
    <Paper>
      <div>
        <h3>{title}</h3>
        <Link to="/home">back</Link>
        <ItemForm {...item} handleSubmit={handleSubmit} />
      </div>
    </Paper>
  );
};

Container.propTypes = {
  invalid: bool,
  submit: func,
  isNewItem: bool,
  item: shape({
    name: string,
    description: string
  })
};

const mapStateToProps = ({ items = [] }, { match: { params } }) => {
  const index = params.id;
  const isNewItem = index === 'new';
  const invalid = !isNewItem && !items[index];
  const item = items[index] || {};
  return {
    invalid,
    item,
    isNewItem
  };
};

const mapDispatchToProps = (dispatch, { match: { params } }) => {
  const index = params.id;
  const _addItem = payload => dispatch(addItem(payload));
  const _editItem = index => payload => dispatch(editItem(payload, index));
  return {
    submit: index === 'new' ? _addItem : _editItem(index)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
