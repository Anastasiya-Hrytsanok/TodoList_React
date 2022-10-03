import { combineReducers } from 'redux';
import userInfo from './userInfoReducer';
import todos from './todosReducer';

export default combineReducers({
  userInfo,
  todos,
});
