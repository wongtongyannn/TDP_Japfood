import React from 'react';

export default class Dice extends React.Component{

state = {
    number:this.props.initialValue
    }

rollDice = () => {
    this.setState({
        number: Math.floor(Math.random() * 6) + 1 
        } //function to generate random integer between 1 to 6
    )};

render() {  
    return (
        <div style={{
        border:"2px solid black",
        padding:"10px",
        width:"50px",
        height: "50px"
        }}>
            {this.state.number}
            <button onClick={this.rollDice}> roll </button>
        </div>
    )
}
};