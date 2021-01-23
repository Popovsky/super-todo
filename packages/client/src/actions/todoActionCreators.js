import ACTION_TYPE from './types';

export const addTask = data => ({
  type: ACTION_TYPE.ADD_TASK,
  payload: {
    data,
  },
});

export const removeTask = data => ({
  type: ACTION_TYPE.REMOVE_TASK,
  payload: {
    data,
  },
});

export const checkTask = data => ({
  type: ACTION_TYPE.CHECK_TASK,
  payload: {
    data,
  },
});
