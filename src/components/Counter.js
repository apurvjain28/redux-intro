import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store/counter";

const Counter = () => {
  const [enteredAmount, setEnteredAmount] = useState(0);

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  const inputIncreaseAmount = useRef("");

  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = (e) => {
    e.preventDefault();
    setEnteredAmount(inputIncreaseAmount.current.value);
    //dispatch({ type: "increase", amount: +enteredAmount });
    dispatch(counterActions.increase(+inputIncreaseAmount.current.value)); // as payload object
  };

  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: "toggle" });
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <form onSubmit={increaseHandler}>
          <input type="number" ref={inputIncreaseAmount}></input>
          <button type="submit">Increase by given amount</button>
        </form>
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
