import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../../actions/todoActionCreators';
import styles from './TaskForm.module.scss';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim()) {
      dispatch(addTask(value));
    }
    setValue('');
  };
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Create new task:</span>
        <input className={styles.input} type="text" onChange={handleChange} value={value}/>
      </label>
      <input className={styles.submit} type="submit" value="Create"/>
    </form>
  );
};

export default TaskForm;