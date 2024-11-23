// src/redux/crud-reducer/reducer.js
const initialState = {
    items: [], // Initialize items as an empty array
  };
  
  const crudReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'REMOVE_ITEM':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case 'UPDATE_ITEM':
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default crudReducer;
  