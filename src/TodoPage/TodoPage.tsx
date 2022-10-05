import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
import './component.css';

const TodoPage: FC = () => {
  const userName = useSelector((state: RootState) => state.userInfo.userName);

  return (
    <>
      <h1>TodoList</h1>
      <p id="todopage_greetings">Hi, {userName}! :)</p>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default TodoPage;
