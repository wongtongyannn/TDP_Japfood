import React from 'react';

export default class Counterplusplus extends React.Component{

state = {
    count:this.props.initialValue
    }

reset = () => {
    this.setState(prevState => ({
    count: prevState.count - prevState.count
    })
    )}

increment = () => {
    this.setState(prevState => {
        if (prevState.count < 10) { //use of if-else statement to limit count to 10
            return {
                count: prevState.count +1
            }
        } 
        else {
            return null; //no state update if count is 10 or more
            }
    }
)};

decrement = () => {
    this.setState(prevState => {
        if (prevState.count > -10) {
            return {
                count: prevState.count -1
            }
        }
        else {
            return null; //no state update if count is -10 or less
            }
    }
)};

render() {  
    return (
        <div style={{
        border:"2px solid black",
        padding:"10px",
        width:"50px",
        height:"50px"
        }}>
            {this.state.count}
            <button onClick={this.reset}> reset </button>
            <button onClick={this.increment} disabled={this.state.count >= 10}> + </button>
            <button onClick={this.decrement} disabled={this.state.count <= -10}> - </button>
        </div>
    )
}
};