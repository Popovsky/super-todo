import ACTION_TYPE from '../actions/types';

const initialState = {
  taskList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TASK: {
      const newTaskList = [...state.taskList];
      newTaskList.push({
        value: action.payload.data,
        id: Date.now(),
        isChecked: false,
      });
      return {
        taskList: newTaskList,
      };
    }
    case ACTION_TYPE.REMOVE_TASK: {
      const newTaskList = [...state.taskList].filter(el => el !== action.payload.data);
      return {
        taskList: newTaskList,
      };
    }
    case ACTION_TYPE.CHECK_TASK: {
      const foundTask = [...state.taskList].find(el => el === action.payload.data.taskItem);
      const foundTaskIndex = [...state.taskList].findIndex(el => el === action.payload.data.taskItem);
      foundTask.isChecked = action.payload.data.isChecked;
      const newTaskList = [...state.taskList];
      newTaskList.splice(foundTaskIndex, 1, foundTask);
      return {
        taskList: newTaskList,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;