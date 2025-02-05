import { useState } from "react";
import ChildOne from "./ChildOne";

const Parent = () => {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    console.log("onClickHandler from parent");
  };
  const increment = () => {
    setCount((preCount) => {
      return preCount + 1;
    });
  };
  const decrement = () => {
    setCount((preCount) => {
      return preCount - 1;
    });
  };

  return (
    <div>
      <h2>This is PARENT</h2>
      <button onClick={onClickHandler}>
        click to trigger 'onClickHandler'{" "}
      </button>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <ChildOne parentProp="props from parent" parentTrigger={onClickHandler} />
    </div>
  );
};

export default Parent;
