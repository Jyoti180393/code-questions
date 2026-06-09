import React from "react";
import ReactDOM from "react-dom/client";
import StateQues from "./StateQues";
import UseCallBackHook from "./UseCallBackHook";
import UseMemoHook from "./UseMemoHook";
import UndoRedo from "./UseReducerHook";

const App = () => {
  return (
    <div>
      {/* <StateQues /> */}
      {/* <CallBackHook /> */}
      {/* <UseMemoHook /> */}
      <UndoRedo />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
