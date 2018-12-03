import React, { Component } from "react";
import "./composition.css";

class Label extends React.Component {
  render() {
    return (
      <span className={this.props.className + " plain-label"}>
        {this.props.children}
      </span>
    );
  }
}

class SuccessLabel extends React.Component {
  render() {
    return <Label className="success-label">{this.props.children}</Label>;
  }
}

class ErrorLabel extends React.Component {
  render() {
    return <Label className="error-label">{this.props.children}</Label>;
  }
}

class SuccessLabelWithIcon extends React.Component {
  render() {
    return (
      <div>
        <Label className="success-label">
          {this.props.children}
          <span>&#9650;</span>
        </Label>
      </div>
    );
  }
}

class CompositionExample extends Component {
  render() {
    return (
      <div>
        Composition Example
        <div className="templateContainer">
          <Label> Plain Label </Label>
          <hr />
          <SuccessLabel> Success Label </SuccessLabel>
          <hr />
          <ErrorLabel> Error Label </ErrorLabel>
          <hr />
          <SuccessLabelWithIcon>SuccessLabel With Icon </SuccessLabelWithIcon>
        </div>
        Note: In Both the case (Composition or Inheritance) outcome is same but
        code is different
      </div>
    );
  }
}

export default CompositionExample;
