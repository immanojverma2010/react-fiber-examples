import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const notificationEl = document.getElementById("portal");

class Notification extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="notification">{this.props.children}</div>,
      notificationEl
    )
  }
}

class Portal extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
  }
  componentDidMount(){
    setTimeout(()=>this.setState({
     show:false
    }),2000)
      }
  render() {
    const {show} = this.state; 
    return (
      <div>
        {!show && <Notification>Loading...</Notification>}
        <App />
      </div>
    );
  }
}

export default Portal;