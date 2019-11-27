import { Formik, FormikErrors } from 'formik';
import React from 'react';
import { Item, Mutable } from '../../models';
import { Button, Form, Input, Label, Textarea } from './styled';

type Errors = FormikErrors<Mutable<Item>>;

const validate = (values: Item): Errors => {
  const errors: Errors = {};
  if (!values.name) errors.name = 'required field !';
  if (!values.description) errors.description = 'required field !';
  return errors;
};

interface ItemFormProps extends Item {
  handleSubmit: (p: Item) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({
  name,
  description,
  handleSubmit
}) => {
  return (
    <Formik
      initialValues={{
        name,
        description
      }}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
              invalid={!!(touched.name && errors.name)}
              id="name"
              name="name"
              placeholder="Item Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <Label htmlFor="name">Description</Label>
            <Textarea
              invalid={!!(touched.description && errors.description)}
              id="description"
              name="description"
              placeholder={'Item description'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <Button type="submit">Save</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ItemForm;
