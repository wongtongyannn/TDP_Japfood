import React from 'react';

export default class Counter extends React.Component{

state = {
    count:this.props.initialValue
    }

increment = () => {
    this.setState(prevState => ({
    count: prevState.count +1
    })
    )}

decrement = () => {
    this.setState(prevState => ({
    count: prevState.count -1
    })
    )}

render() {  
    return (
        <div style={{
        border:"2px solid black",
        padding:"10px",
        width:"50px",
        height:"50px"
        }}>
            {this.state.count}
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
        </div>
    )
}
};