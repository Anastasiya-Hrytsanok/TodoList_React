export const setUserName = (userName: string) => ({
  type: 'SET_USER_NAME',
  userName,
});

export const addTodo = (value: string, id: number) => ({
  type: 'ADD_TODO',
  id,
  value,
});

export const deleteTodo = (id: number) => ({
  type: 'DELETE_TODO',
  id,
});

export const changeTodo = (value: string, id: number) => ({
  type: 'CHANGE_TODO',
  id,
  value,
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id,
});
