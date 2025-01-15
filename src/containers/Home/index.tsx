import { motion } from 'framer-motion';

import { Link } from 'react-router';

import Item from '../../components/Item';

import { Item as ItemModel } from '../../types/Item';

import { Wrap, Buttons } from './styled';

import { connect } from 'react-redux';

import { deleteItem, deleteAll } from '../../state/slices/items';
import { RootState, AppDispatch } from 'src/state';

const list = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const _item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};

interface HomeProps {
  items: readonly ItemModel[];
  deleteItem: (i: number) => void;
  deleteAll: () => void;
}
const Home = ({ items, deleteItem, deleteAll }: HomeProps) => {
  const hasItems = !!items?.length;
  return (
    <Wrap>
      <h1>Items</h1>
      {hasItems ? (
        <motion.ul variants={list} initial="hidden" animate="visible">
          {items.map(({ id, name }, index) => (
            <motion.li variants={_item} key={id}>
              <Item remove={deleteItem} name={name} index={index} />
            </motion.li>
          ))}
        </motion.ul>
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

const mapStateToProps = ({ items = [] }: RootState) => ({ items });
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  deleteItem: (index: number) => dispatch(deleteItem({ index })),
  deleteAll: () => dispatch(deleteAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
