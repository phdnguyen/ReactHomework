import { CHANGE_VALUE } from '../actions/type';

export default (state = 0, action) => {
  return action.type === CHANGE_VALUE
    ? action.payload
    : state;
}