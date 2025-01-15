import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router';
import ItemForm from '../../components/ItemForm';
import Paper from '../../components/Paper';
import type { Item } from '../../types/Item';
import { addItem, editItem } from '../../state/slices/items';
import { Head } from './styled';
import { RootState } from 'src/state';
import { useParams } from 'react-router';

const Container = () => {
  const dispatch = useDispatch();
  const { id: index } = useParams();
  const items = useSelector((state: RootState) => state.items ?? []);

  const isNewItem = index === 'new';
  const invalid = index === undefined && !isNewItem && !items[Number(index)];
  const item = items[Number(index)] ?? { name: '', description: '' };

  const _addItem = (payload: Item) => dispatch(addItem(payload));
  const _editItem = (index: number) => (item: Item) =>
    dispatch(editItem({ item, index }));

  const submit = index === 'new' ? _addItem : _editItem(Number(index));

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (payload: Item): void => {
    submit(payload);
    setSubmitted(true);
  };
  if (submitted || invalid) return <Navigate to="/home" />;
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

export default Container;
