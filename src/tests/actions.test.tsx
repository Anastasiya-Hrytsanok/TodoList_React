import { setUserName } from '../actions';
import todos from '../reducers/todosReducer';

describe('actions', () => {
  it('set user name Valera', () => {
    const userName = 'Valera';
    const expectedAction = {
      type: 'SET_USER_NAME',
      userName,
    };
    expect(setUserName('Valera')).toEqual(expectedAction);
  });

  it('should add new todo item with "ADD_TODO" action', () => {
    const action = {
      type: 'ADD_TODO',
      id: 123,
      value: 'To buy milk',
    };

    const result = todos([], action);
    const addedTodo = result[0];
    expect(addedTodo.value).toBe('To buy milk');
    expect(addedTodo.id).toBe(123);
    expect(addedTodo.isCompleted).toBe(false);
  });

  it('should delete todo item with "DELETE_TODO" action', () => {
    const action = {
      type: 'DELETE_TODO',
      id: 123,
    };

    const result = todos(
      [{ id: 123, value: 'To buy milk', isCompleted: true }],
      action
    );
    expect(result.length).toBe(0);
  });

  it('should change todo value with "CHANGE_TODO" action', () => {
    const action = {
      type: 'CHANGE_TODO',
      id: 44,
      value: 'To buy apple',
    };

    const result = todos(
      [{ id: 44, value: 'To buy milk', isCompleted: true }],
      action
    );
    expect(result[0].value).toBe('To buy apple');
  });

  it('should change field value "isCompleted" from true to false with "TOGGLE_TODO" action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 44,
    };

    const result = todos(
      [{ id: 44, value: 'To buy milk', isCompleted: false }],
      action
    );
    expect(result[0].isCompleted).toBe(true);
  });

  it('should change field value "isCompleted" from false to true with "TOGGLE_TODO" action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 156,
    };

    const result = todos(
      [{ id: 156, value: 'To buy dress', isCompleted: true }],
      action
    );
    expect(result[0].isCompleted).toBe(false);
  });
});
