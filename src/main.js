import React, { Component } from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import compositionExample from "./compositionExample";
import InheritanceExample from "./inheritanceExample";
import DifferentRenderReturn from "./differentRenderReturn";
import CloneElement from "./cloneElement";
import ErrorBoundary from "./ErrorBoundary";
import Portal from "./Portal";

const Base = props => <div className="base">{props.children}</div>;

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/app">App</Link>
    </li>
    <li>
      <Link to="/composition">Composition</Link>
    </li>
    <li>
      <Link to="/inheritance">Inheritance</Link>
    </li>
    <li>
      <Link to="/renderReturn">Different Render return</Link>
    </li>
    <li>
      <Link to="/errorBoundary">Error Boundary</Link>
    </li>    
    <li>
      <Link to="/Portal">Portal</Link>
    </li>
  </ul>
);

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Base} />
            <Route path="/app" component={App} />
            <Route path="/composition" component={compositionExample} />
            <Route path="/inheritance" component={InheritanceExample} />
            <Route path="/renderReturn" component={DifferentRenderReturn} />
            <Route path="/errorBoundary" component={ErrorBoundary} />
            <Route path="/cloneExample" component={CloneElement} />          
            <Route path="/portal" component={Portal} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
