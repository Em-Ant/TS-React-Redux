import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Redirect, Link } from 'react-router-dom';

import ItemForm, { SubmitData } from '../../components/ItemForm';
import Paper from '../../components/Paper';

import { Head } from './styled';

import { addItem, editItem } from '../../state/actions';

import { Dispatch } from 'redux'

interface FormProps {
  invalid: boolean,
  item: any,
  isNewItem: boolean,
  submit: (a: SubmitData) => void
}
const Container = ({ invalid, item, submit, isNewItem }: FormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (payload: SubmitData) => {
    submit(payload);
    setSubmitted(true);
  };
  if (submitted || invalid) return <Redirect to="/home" />;
  const title = isNewItem ? 'Add Item' : 'Edit Item';
  return (
    <Paper>
      <Head>
        <h3>{title}</h3>
        <Link to="/home">back</Link>
      </Head>
      <ItemForm {...item} handleSubmit={handleSubmit} />
    </Paper>
  );
};

const mapStateToProps = ({ items = [] }, { match: { params } }: any) => {
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

const mapDispatchToProps = (dispatch: Dispatch, { match: { params } }: any) => {
  const index = params.id as string;
  const _addItem = (payload: SubmitData) => dispatch(addItem(payload));
  const _editItem = (index: string) => (payload: SubmitData) => dispatch(editItem(payload, index));
  return {
    submit: index === 'new' ? _addItem : _editItem(index)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
