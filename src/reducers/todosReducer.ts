import { Todo } from '../models/todo';

const todos = (state: Todo[] = [], action: Record<string, any>): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          value: action.value,
          isCompleted: false,
        },
      ];
    case 'DELETE_TODO':
      return state.filter((todo: Todo) => todo.id !== action.id);
    case 'CHANGE_TODO':
      return state.map((todo: Todo) =>
        todo.id !== action.id ? todo : { ...todo, value: action.value }
      );
    case 'TOGGLE_TODO':
      return state.map((todo: Todo) =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    default:
      return state;
  }
};

export default todos;
