import { useCallback, useState, memo } from "react";

const UseCallBackHook = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  // const [data, setData] = useState([]);

  console.log("parent rendered");

  const increment = useCallback(() => {
    console.log("increment function called with count:", count);
    setCount((c) => c + 1);
    // return setCount((c) => c + 1);
  }, [count]);

  // if we don't pass count as a dependency to useCallback,the increment function will always have the initial value of count (which is 1)
  // so the console.log will have value 1, but the child component will not re-render because the increment function reference will not change,
  //  and the child component is memoized using React.memo.

  const getInputValue = (e) => {
    setText(e.target.value);
  };

  // const fetchDetails = useCallback(() => {
  //   const newDetails = count * 2;
  //   setData(newDetails);
  //   console.log(newDetails);
  // }, [count]);

  return (
    <div>
      <h3>useCallback concept</h3>
      <input onChange={getInputValue} placeholder="Enter Text"></input>
      <p>{text}</p>

      <span> {count}</span>
      <ChildFetch onIncrement={increment} />
    </div>
  );
};

const ChildFetch = memo(({ onIncrement }) => {
  console.log("child loaded");
  const [text, setText] = useState("");
  const getInputValue = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h4>Data Loaded Successfully</h4>
      <button onClick={onIncrement}>Increment Count</button>
      <input onChange={getInputValue} placeholder="Enter Text"></input>
      <p>{text}</p>
    </div>
  );
});

export default UseCallBackHook;

// here the useCallback hook is used to memoize the increment function,so that it is not recreated on every render of the parent component.
//  This is important because if the increment function is recreated on every render,
//  it will cause the child component to re-render unnecessarily, even if the count state has not changed.
// By using useCallback, we ensure that the increment function is only created once and will not cause unnecessary
// re-renders of the child component.

// but the child component will render on text change because the parent component re-renders on text change
// and the child component is a child of the parent component, so it will re-render as well.
// to stop the child component from re-rendering on text change,
//  we can use React.memo to memoize the child component, so that it only re-renders when its props change.
