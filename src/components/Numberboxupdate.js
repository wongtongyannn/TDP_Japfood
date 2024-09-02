import React from 'react';

export default class Numberboxupdate extends React.Component{

state = {
    count:this.props.initialValue
    }

click = () => {
   this.setState({
    count: this.state.count +1
   })
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