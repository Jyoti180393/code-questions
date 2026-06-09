function historyReducer(state, action) {
  const { past, present, future } = state;

  switch (action.type) {
    case ACTIONS.SET_TEXT: {
      const newPresent = action.payload;

      // to avoid unnecessary state updates if state is unchanged

      if (newPresent === present) return state;

      return {
        past: [...past, present], // add current present to past
        present: newPresent, // update present with new value
        future: [], // clear future on new action
      };
    }
    case ACTIONS.UNDO: {
      // return if no past value to undo
      if (past.length === 0) return state;

      const previous = past[past.length - 1]; // get last value from past
      const newPast = past.slice(0, past.length - 1); // remove last value from past
      return {
        past: newPast, // update past by removing last value
        present: previous, // set present to previous value
        future: [present, ...future], // add current present to future
      };
    }
    case ACTIONS.REDO: {
      // if no future return state
      if (future.length === 0) return state;

      const next = future[0]; // get first value from future
      const newFuture = future.slice(1); // remove first value from future

      return {
        past: [...past, present], // add current present to past
        present: next, // set present to next value
        future: newFuture, // update future by removing first value
      };
    }
    case ACTIONS.CLEAR:
      return createInitialState(action.payload || "");
    // reset to initial state with optional new present value
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
    // throw error for unhandled action types
  }
}

const ACTIONS = {
  SET_TEXT: "set-text",
  UNDO: "undo",
  REDO: "redo",
  CLEAR: "clear",
};

const createInitialState = (initialPresent) => ({
  past: [],
  present: initialPresent,
  future: [],
});

export { historyReducer, ACTIONS, createInitialState };
