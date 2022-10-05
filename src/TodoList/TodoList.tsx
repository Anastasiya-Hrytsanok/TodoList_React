import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import { Todo } from '../models/todo';
import { TodoFilter } from '../models/todoFilter';
import FilterTabItem from '../FilterTabItem/FilterTabItem';
import TodoItem from '../TodoItem/TodoItem';
import './component.css';

const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const [filter, setFilter] = useState<TodoFilter>('all');

  const todosToDisplay = todos.filter(({ isCompleted }: Todo) => {
    switch (filter) {
      case 'all':
        return true;
      case 'active':
        return !isCompleted;
      case 'completed':
        return isCompleted;
    }
  });

  return (
    <div className="tasks_list">
      <h2>
        You have {todos.length} {todos.length === 1 ? 'task:' : 'tasks:'}
      </h2>
      <div>
        <FilterTabItem
          isActive={filter === 'active'}
          id="active"
          label="Active"
          onClick={setFilter}
        />
        <FilterTabItem
          isActive={filter === 'all'}
          id="all"
          label="All"
          onClick={setFilter}
        />
        <FilterTabItem
          isActive={filter === 'completed'}
          id="completed"
          label="Completed"
          onClick={setFilter}
        />
      </div>
      <ol>
        {todosToDisplay.map((todo: Todo, index: number) => (
          <TodoItem todo={todo} key={todo.id} index={index} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
