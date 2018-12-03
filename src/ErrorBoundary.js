import React, { Component } from "react";

class TestDidCatch extends Component {
  render() {
    console.log("TestDidCatch");

    return (
      <div>
        <ErrorBoundary>
          <>
            Increase Counter value and see on value 3
            <BuggyCounter counterA={3} />
          </>
          <>
            Increase Counter value and see on value 5
            <BuggyCounter counterB={5} />
          </>
          <>
            Increase Counter value and see on value 7
            <BuggyCounter counterC={7} />
          </>
        </ErrorBoundary>
      </div>
    );
  }
}

export default TestDidCatch;

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    console.log("BuggyCounter");
    if (this.state.counter === this.props.counterA) {
      return undefined;
    } else if (this.state.counter === this.props.counterB) {
      return new Error("Customised Error Using 'new Error' ");
    } else if (this.state.counter === this.props.counterC) {
      throw new Error("Customised Error  Using 'throw new Error' ");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(err, errorInfo) {
    if (err) {
      this.setState({ hasError: true, error: err, errorInfo: errorInfo });
        //either do in getDerivedStateFromError or here    
      //      this.setState({ hasError: true, error: err, errorInfo: errorInfo });
    }
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      return [
        <h1>Something went wrong.</h1>,
        <div
          children={[<b>Error is</b>, `${error ? error.toString() : ""}`]}
        />,
        <hr />,
        <div
          children={[<b>ErrorInfo is</b>, `${
            errorInfo && errorInfo.componentStack
              ? errorInfo.componentStack
              : ""
          }`]}
        />
      ];
    }
    return this.props.children;
  }
}
