import { UserInfo } from "../models/userInfo";

const userInfo = (state: UserInfo = {}, action: Record<string, any>): UserInfo => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default userInfo;
