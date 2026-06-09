import { useMemo, useState } from "react";

const UseMemoHook = () => {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  console.log("rendering component");

  const getFactorial = (n) => {
    console.log("rendering component with number:", number);
    if (n <= 0) return 1;
    return n * getFactorial(n - 1);
  };

  // without useMemo
  // const factorial = getFactorial(number);

  // with useMemo
  const factorial = useMemo(() => {
    return getFactorial(number);
  }, [number]);

  const handleNumberChange = (e) => {
    const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    setNumber(val);
  };

  return (
    <div>
      <h3>useMemo concept</h3>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text"
      ></input>
      <p>Text: {text}</p>

      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter Number"
      />
      <button onClick={() => setText((t) => t + "!")}>Force render</button>

      {/* this button will force the component to re-render without changing the number,
      so if not using useMemo, the factorial would be recalculated on every render,
       which can be inefficient for large numbers. However, with useMemo,
      the factorial will not be recalculated due to useMemo's optimization. */}

      {/* if we want to chnage factorial on count increment */}
      {/* <button onClick={() => setCount(count + 1)}>Increment count</button>
      <p>Count: {count}</p> */}

      <p>
        Factorial of {number ? number : 0} is :{factorial}
      </p>
    </div>
  );
};

export default UseMemoHook;

// changing text field won’t recalculate the factorial because the dependency array ensures
// it only recomputes factorial when number changes means(if the consecutive number is same) .
// This optimization can significantly improve performance,especially for expensive calculations,
//  by avoiding unnecessary recalculations when unrelated state changes.
