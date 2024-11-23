// src/redux/crud-action/action.js
export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  }
}
  
  export const removeItem = (id) => {
    return {
      type: 'REMOVE_ITEM',
    payload: id,
    }
  }
  
  export const updateItem = (item) => {
      return {
        type: 'UPDATE_ITEM',
        payload: item,
      }
  }
  