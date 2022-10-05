import React, { FC, MouseEventHandler, useState } from 'react';
import { ReactComponent as CheckMark } from '../images/svg/checkMark.svg';
import { ReactComponent as Cross } from '../images/svg/cross.svg';
import { ReactComponent as Editor } from '../images/svg/editor.svg';
import './component.css';
import { useDispatch } from 'react-redux';
import { changeTodo, deleteTodo, toggleTodo } from '../actions';
import { Todo } from '../models/todo';
import { getInputById } from '../utils';
import ChangingTaskModal from '../ChangingTaskModal/ChangingTaskModal';

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem: FC<TodoItemProps> = ({
  todo: { value, id, isCompleted },
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickSaveButton: MouseEventHandler = () => {
    const changedTask = getInputById('changed_task').value;
    dispatch(changeTodo(changedTask, id));
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <ChangingTaskModal
          onClickCancelButton={() => setIsOpen(false)}
          onClickSaveButton={handleClickSaveButton}
          taskValue={value}
        />
      ) : null}
      <li>
        <CheckMark
          className={isCompleted ? 'completed' : ''}
          alt="check mark"
          onClick={() => dispatch(toggleTodo(id))}
        />
        <p className={isCompleted ? 'completed' : ''}>
          <span> {index + 1}.</span>
          {value}
        </p>
        <Editor alt="editor" onClick={() => setIsOpen(true)} />
        <Cross alt="cross" onClick={() => dispatch(deleteTodo(id))} />
      </li>
    </>
  );
};

export default TodoItem;
