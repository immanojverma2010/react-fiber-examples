import React, { Component } from "react";
import "./composition.css";

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.className = "plain-label";
  }
  render(test) {
    return (
      <span className={this.className}>
        {this.props.children} {test}
      </span>
    );
  }
}

class SuccessLabel extends Label {
  constructor(props) {
    super(props);
    this.className = this.className + " success-label";
  }
}

class SuccessLabelWithIcon extends Label {
  constructor(props) {
    super(props);
    this.className = this.className + " success-label";
  }
  render() {
    return (
      <div>
        {super.render("abc")}
        <span>&#9650;</span>
      </div>
    );
  }
}

class ErrorLabel extends Label {
  constructor(props) {
    super(props);
    this.className = this.className + " error-label";
  }
}

class InheritanceExample extends Component {
  render() {
    return (
      <div>
        Inheritance Example
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

export default InheritanceExample;
