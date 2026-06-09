import { useEffect, useState } from "react";

const StateQues = () => {
  //purpose of callback function in setState()
  const [count, setCount] = useState(0);
  const [triggerPoint, setTriggerPoint] = useState("Click");

  const handleClick = () => {
    console.log(count);

    setCount((prev) => prev + 1);
    // setCount(count + 1);
  };

  useEffect(() => {
    // timer
    // const timer = setTimeout(() => {
    //   console.log(count);

    //   // setCount(count + 1);
    //   setCount((prev) => prev + 1);
    //   setTriggerPoint("Timer");
    // }, 1000);

    // interval
    // const id = setInterval(() => {
    //   console.log(count);
    //   // setCount(count + 1);
    //   setCount((prev) => prev + 1);
    //   setTriggerPoint("Interval");
    // }, 1000);

    // click event handler
    window.addEventListener("click", handleClick);

    return () => {
      // cleanup
      window.removeEventListener("click", handleClick);
      // clearInterval(id);
      // clearTimeout(timer);
    };
  }, [count]);
  // if we include count in dependency array
  // then setCount(count + 1) also works properly

  // console.log(count);

  return (
    <div>
      <h3>Set StateQues</h3>
      <button>Counter</button>
      <p>
        {triggerPoint} Count is : {count}
      </p>
    </div>
  );
};

export default StateQues;
