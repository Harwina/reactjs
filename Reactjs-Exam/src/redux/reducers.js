const initialState = {
  tasks: [],
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index ? action.payload.task : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;