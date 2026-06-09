import React from "react";
import ReactDOM from "react-dom/client";
import StateQues from "./StateQues";
import UseCallBackHook from "./UseCallBackHook";
import UseMemoHook from "./UseMemoHook";

const App = () => {
  return (
    <div>
      {/* <StateQues /> */}
      {/* <CallBackHook /> */}
      <UseMemoHook />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
