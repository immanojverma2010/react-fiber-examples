import React from "react";

const Arr = () =>["This is",1,"st time by react you can render Array or string/number",<Elem name="A" key="a" />, <Elem name="B" key="b" />,<Note />];

const Elem = props => <div>Component{props.name}</div>;

const Note = () => "Now you can return array string or React.Fragment or component";

const DifferentRenderReturn = () =>  <>
      Example :
      <div>
        <Arr />
      </div>
    </>

export default DifferentRenderReturn;
