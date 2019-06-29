export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';

export const addItem = payload => ({ type: ADD_ITEM, payload });
export const editItem = (payload, index) => ({ type: EDIT_ITEM, index, payload }); 
export const deleteteItem = index => ({ type: DELETE_ITEM, index });
export const deleteAll = () => ({ type: DELETE_ALL });