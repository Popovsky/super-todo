import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './TaskList.module.scss';
import {checkTask, removeTask} from '../../actions/todoActionCreators';

const TaskList = () => {
  const taskList = useSelector(state => state.todo.taskList);
  const dispatch = useDispatch();
  const handleCheck = (event, taskItem) => {
    dispatch(checkTask({taskItem, isChecked: event.target.checked}));
  };
  const handleRemove = taskItem => {
    dispatch(removeTask(taskItem));
  };
  return (
    <ul className={styles.taskList}>
      {taskList.map(item => <li className={styles.taskItem} key={item.id}>
        <span className={item.isChecked ? styles.checked : ''}>{item.value}</span>
        <input id={item.id} className={styles.input} onChange={(e) => handleCheck(e, item)} type="checkbox"/>
        <label htmlFor={item.id} className={styles.labelCheck}/>
        <button className={styles.removeBtn} onClick={() => handleRemove(item)}>+</button>
      </li>)}
    </ul>
  );
};

export default TaskList;