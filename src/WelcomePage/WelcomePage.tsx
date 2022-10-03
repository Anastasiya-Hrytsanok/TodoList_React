import React, { FC, MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName } from '../actions';
import { getInputById, isEmpty, startWithUpperCase } from '../utils';
import './component.css';

const WelcomePage: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick: MouseEventHandler = () => {
    const enteredName = getInputById('user_name').value;

    if (isEmpty(enteredName)) {
      setErrorMessage('The field is required');
    } else if (!startWithUpperCase(enteredName)) {
      setErrorMessage('Name should start with a capital letter');
    } else {
      setErrorMessage('');
      dispatch(setUserName(enteredName));

      navigate('/todolist');
    }
  };

  return (
    <>
      <h1>Hello! :)</h1>
      <form className="welcome_form">
        <label htmlFor="user_name">Enter your name:</label>
        <input type="text" id="user_name" />
        <button type="button" onClick={handleClick}>
          Save
        </button>
      </form>
      <p className="error_message welcome_form_error">{errorMessage}</p>
    </>
  );
};

export default WelcomePage;
