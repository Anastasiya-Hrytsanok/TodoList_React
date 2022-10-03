import React, { MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import { getInputById, isEmpty } from '../utils';
import './component.css';

const AddTodo = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleClick: MouseEventHandler = () => {
    const taskValueInput = getInputById('new_task');

    if (isEmpty(taskValueInput.value)) {
      setErrorMessage('Enter new task, please');
    } else {
      setErrorMessage('');
      dispatch(addTodo(taskValueInput.value, Date.now()));
      taskValueInput.value = '';
    }
  };

  return (
    <>
      <div className="add_todo_form">
        <label htmlFor="new_task">Enter new task: </label>
        <input type="text" id="new_task"></input>
        <button type="button" onClick={handleClick}>
          Add task
        </button>
      </div>
      <p className="error_message add_todo_error">{errorMessage}</p>
    </>
  );
};

export default AddTodo;
