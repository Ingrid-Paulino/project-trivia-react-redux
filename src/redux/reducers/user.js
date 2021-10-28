import { USER, SCORE_COUNT } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      name: action.payload.username,
      email: action.payload.email,
    };
  case SCORE_COUNT:
    return {
      ...state,
      score: action.scorePoint,
    };
  default:
    return state;
  }
}

export default user;
