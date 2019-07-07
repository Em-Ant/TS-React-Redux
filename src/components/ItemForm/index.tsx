import React, { useState, useEffect } from 'react';

import { Input, Textarea, Label, Button, Form } from './styled';

import Item from '../../models/item';

const validateForm = (
  name: string,
  description: string
): boolean => !!(name && description);

interface ItemFormProps {
  name: string,
  description: string,
  handleSubmit: (p: Item) => void
}

const ItemForm = ({ name, description, handleSubmit }: ItemFormProps) => {
  const [_name, setName] = useState({ value: '', touched: false });
  const [_description, setDescription] = useState({
    value: '',
    touched: false
  });
  useEffect(() => {
    if (name && description) {
      setName({ ..._name, value: name });
      setDescription({ ..._description, value: description });
    }
  }, []);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(_name.value, _description.value)) {
      handleSubmit({
        name: _name.value,
        description: _description.value
      });
    } else {
      setName({ ..._name, touched: true });
      setDescription({ ..._description, touched: true });
    }
  };
  const isNameInvalid = !_name.value && _name.touched;
  const isDescriptionInvalid = !_description.value && _description.touched;
  
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        invalid={isNameInvalid}
        id="name"
        name="name"
        placeholder="Item Name"
        onChange={e => setName({ value: e.target.value, touched: true })}
        value={_name.value}
      />
      <Label htmlFor="name">Description</Label>
      <Textarea
        invalid={isDescriptionInvalid}
        id="description"
        name="description"
        placeholder={'Item description'}
        onChange={e => setDescription({ value: e.target.value, touched: true })}
        value={_description.value}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default ItemForm;
