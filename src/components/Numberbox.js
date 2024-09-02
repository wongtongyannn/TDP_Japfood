import React from 'react';

export default class Numberbox extends React.Component{

state = {
    count:this.props.initialValue
    }

click = () => {
   alert("clicked") //msg box "clicked" will appear when div is clicked
    }

render() {  
    return (
        <div onClick={this.click} style={{
        border:"2px solid black",
        padding:"10px",
        width:"50px",
        height:"50px"
        }}>{this.state.count}</div>
    )
}
};