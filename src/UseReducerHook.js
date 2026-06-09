import React, { useReducer } from "react";
import { createInitialState, historyReducer, ACTIONS } from "./historyReducer";

const UndoRedo = () => {
  const [state, dispatch] = useReducer(historyReducer, createInitialState(""));
  const { past, present, future } = state;
  console.log("past:", past, "present:", present, "future:", future);

  return (
    <div style={{ padding: "20px" }}>
      <h2>State History Manager</h2>

      {/* Controlled text input representing our present state */}
      <input
        type="text"
        value={present}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SET_TEXT, payload: e.target.value })
        }
        placeholder="Type here..."
      />

      <div style={{ marginTop: "10px" }}>
        {/* Undo Button - Disabled if the past stack is completely empty */}
        <button
          onClick={() => dispatch({ type: ACTIONS.UNDO })}
          disabled={past.length === 0}
        >
          Undo ({past.length})
        </button>

        {/* Redo Button - Disabled if the future stack is completely empty */}
        <button
          onClick={() => dispatch({ type: ACTIONS.REDO })}
          disabled={future.length === 0}
          style={{ marginLeft: "10px" }}
        >
          Redo ({future.length})
        </button>

        <button
          onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: "" })}
          disabled={past.length === 0}
          style={{ marginLeft: "10px" }}
        >
          Clear
        </button>
      </div>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <strong>Live Preview:</strong> {present}
      </div>
    </div>
  );
};

export default UndoRedo;

// can use it with useContext to manage state history across multiple components without prop drilling,
// allowing for a more centralized and accessible state management solution.
