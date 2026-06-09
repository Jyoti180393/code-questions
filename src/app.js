import React from "react";
import ReactDOM from "react-dom/client";
import StateQues from "./StateQues";
import UseCallBackHook from "./UseCallBackHook";
import UseMemoHook from "./UseMemoHook";
import UndoRedo from "./UseReducerHook";
import UseIdHook from "./UseIdHook";

const App = () => {
  return (
    <div>
      {/* <StateQues /> */}
      {/* <CallBackHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UndoRedo /> */}
      <UseIdHook />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
