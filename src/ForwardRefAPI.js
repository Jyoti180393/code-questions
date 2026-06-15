import { forwardRef, React, useRef } from "react";

const ForwardRefAPI = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    console.log("Input Value from child: " + inputRef.current.value);

    inputRef.current.focus();
  };

  return (
    <div>
      <Child ref={inputRef} placeholder="Type Here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  const gerRefValue = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input ref={ref} {...props} onChange={gerRefValue} />
    </div>
  );
});

export default ForwardRefAPI;
