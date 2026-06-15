import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error Caught: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2> Something went Wrong</h2>;
    }
    return this.props.children;
  }
}

const BuggyCompoent = () => {
  throw new Error("Oops !");

  return <div>Normal content</div>;
};

export { BuggyCompoent, ErrorBoundary };
