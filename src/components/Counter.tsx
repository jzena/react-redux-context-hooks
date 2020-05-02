import React, { useContext } from 'react';
import { AppContext } from './../context/shop-context';
import { CounterType } from './../context/enum';
const Counter: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: CounterType.ADD_COUNTER,
          });
        }}
      >
        click
      </button>
      {state.counter}
    </div>
  );
};

export default Counter;
