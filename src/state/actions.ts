export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';

import { Item } from '../models';

export interface AddItemAction {
  type: typeof ADD_ITEM,
  payload: Item
}
export interface EditItemAction {
  type: typeof EDIT_ITEM,
  payload: Item,
  index: number
}
export interface DeleteItemAction {
  type: typeof DELETE_ITEM,
  index: number
}
export interface DeleteAllAction {
  type: typeof DELETE_ALL
}

export type ItemsActions = AddItemAction | EditItemAction | DeleteItemAction | DeleteAllAction;

export const addItem = (payload: Item): AddItemAction => ({ type: ADD_ITEM, payload });
export const editItem = (payload: Item, index: number): EditItemAction => ({ type: EDIT_ITEM, index, payload }); 
export const deleteItem = (index: number): DeleteItemAction => ({ type: DELETE_ITEM, index });
export const deleteAll = (): DeleteAllAction => ({ type: DELETE_ALL });
