import React, { useState } from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import { Redirect, Link } from 'react-router-dom';

import ItemForm from '../../components/ItemForm';
import Paper from '../../components/Paper';

import { Head } from './styled';

import {
  addItem,
  editItem,
  AddItemAction,
  EditItemAction
} from '../../state/actions';

import { Item } from '../../models';

import { Dispatch } from 'redux';

interface FormProps {
  invalid: boolean;
  item: Item;
  isNewItem: boolean;
  submit: (a: Item) => void;
}

const Container: React.FunctionComponent<FormProps> = ({
  invalid,
  item,
  submit,
  isNewItem
}) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (payload: Item): void => {
    submit(payload);
    setSubmitted(true);
  };
  if (submitted || invalid) return <Redirect to="/home" />;
  const title = isNewItem ? 'Add Item' : 'Edit Item';
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Paper>
        <Head>
          <h3>{title}</h3>
          <Link to="/home">back</Link>
        </Head>
        <ItemForm {...item} handleSubmit={handleSubmit} />
      </Paper>
    </motion.div>
  );
};

const mapStateToProps = ({ items = [] }, { match: { params } }: any) => {
  const index = params.id;
  const isNewItem = index === 'new';
  const invalid = !isNewItem && !items[index];
  const item = items[index];
  return {
    invalid,
    item,
    isNewItem
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AddItemAction | EditItemAction>,
  { match: { params } }: any
) => {
  const index = params.id as string;
  const _addItem = (payload: Item) => dispatch(addItem(payload));
  const _editItem = (index: number): ((i: Item) => EditItemAction) => (
    payload: Item
  ) => dispatch(editItem(payload, index));
  return {
    submit: index === 'new' ? _addItem : _editItem(Number(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
