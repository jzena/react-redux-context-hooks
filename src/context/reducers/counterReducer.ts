import { CounterType } from './../enum';
import { CounterAction } from '../types';



const counterReducer = (state: number, action: CounterAction) => {
  switch (action.type) {
    case CounterType.ADD_COUNTER:
      return state + 1;
    default:
      return state;
  }
};

export default {
  reducer: counterReducer
}
