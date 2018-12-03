import React, { Component } from 'react';

class CloneElement extends Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    );
  }
}

class Buttons extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected : "none"
    }
  }
setSelected(selected){
this.setState({selected}) 
}
  render() {
    let fn = child => React.cloneElement(child,{
      onClick:this.setSelected.bind(this,child.props.value)
    })
    let items = [<span children={"OOlalala"} />,React.Children.map(this.props.children,fn),"Testing"];    
    //let items= this.props.children; 
    return (
      <div>
        <h2>You have selected {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

export default CloneElement;
