import React from "react";
import ReactDOM from "react-dom/client";
import StateQues from "./StateQues";
import UseCallBackHook from "./UseCallBackHook";
import UseMemoHook from "./UseMemoHook";
import UndoRedo from "./UseReducerHook";
import UseIdHook from "./UseIdHook";
import ForwardRefAPI from "./ForwardRefAPI";
import { BuggyCompoent, ErrorBoundary } from "./ErrorBoundary";

const App = () => {
  return (
    <div>
      <StateQues />
      <ErrorBoundary>
        <BuggyCompoent />
      </ErrorBoundary>
      {/* <CallBackHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UndoRedo /> */}
      {/* <UseIdHook /> */}
      {/* <ForwardRefAPI /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
