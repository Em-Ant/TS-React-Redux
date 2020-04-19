import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ItemForm from '../../components/ItemForm';
import Paper from '../../components/Paper';
import { Item } from '../../models';
import { addItem, editItem } from '../../state/slices/items';
import { Head } from './styled';
import { Dispatch, RootState } from 'src/state';

interface Props {
  invalid: boolean;
  item: Item;
  isNewItem: boolean;
  submit: (a: Item) => void;
}

const Container = ({ invalid, item, submit, isNewItem }: Props) => {
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

const mapStateToProps = (
  { items = [] }: RootState,
  { match: { params } }: any
) => {
  const index = params.id;
  const isNewItem = index === 'new';
  const invalid = !isNewItem && !items[index];
  const item = items[index] ?? { name: '', description: '' };
  return {
    invalid,
    item,
    isNewItem,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, { match: { params } }: any) => {
  const index = params.id as string;
  const _addItem = (payload: Item) => dispatch(addItem(payload));
  const _editItem = (index: number) => (item: Item) =>
    dispatch(editItem({ item, index }));
  return {
    submit: index === 'new' ? _addItem : _editItem(Number(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
