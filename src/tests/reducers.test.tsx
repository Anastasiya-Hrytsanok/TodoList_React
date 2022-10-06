import userInfo from '../reducers';
import {
  setUserName,
  addTodo,
  deleteTodo,
  changeTodo,
  toggleTodo,
} from '../actions';
import todos from '../reducers';

const state = {
  userInfo: 'Valera',
  todos: [
    { id: 121, value: 'Morning walk', isCompleted: true },
    { id: 1651, value: 'To find meaning of life', isCompleted: false },
    { id: 1254, value: 'Morning walk', isCompleted: false },
  ],
};

describe('reducers', () => {
  it('"Valera" should be setted as user name', () => {
    const action = setUserName('Valera');
    const state = { userInfo: '', todos: [] };
    const newState = userInfo(state, action);

    expect(newState.userInfo.userName).toEqual('Valera');
  });

  it('The length of the todos should be incremented using addTodo', () => {
    const action = addTodo('Play the piano', 666);
    const newState = todos(state, action);

    expect(newState.todos.length).toEqual(4);
  });

  it('New task should be added with "To sleep" value', () => {
    const action = addTodo('To sleep', 664566);
    const newState = todos(state, action);

    expect(newState.todos[newState.todos.length - 1].value).toEqual('To sleep');
  });

  it('The length of the todos should be decremented using deleteTodo', () => {
    const action = deleteTodo(121);
    const newState = todos(state, action);

    expect(newState.todos.length).toEqual(2);
  });

  it('There are should not be task with deleted id in state', () => {
    const action = deleteTodo(121);
    const newState = todos(state, action);

    expect(newState.todos.some((todo) => todo.id === 121)).toEqual(false);
  });

  it('The value of the todo should be changed', () => {
    const action = changeTodo('Morning rest', 1651);
    const newState = todos(state, action);

    expect(newState.todos.find((todo) => todo.id === 1651)?.value).toEqual(
      'Morning rest'
    );
  });

  it('The length of the todos should be the same using changeTodo', () => {
    const action = changeTodo('Morning rest', 1651);
    const newState = todos(state, action);

    expect(newState.todos.length).toEqual(3);
  });

  it('The field "isCompleted" should be "true" at todo with id = 1254', () => {
    const action = toggleTodo(1254);
    const newState = todos(state, action);

    expect(
      newState.todos.find((todo) => todo.id === 1254)?.isCompleted
    ).toEqual(true);
  });
});
