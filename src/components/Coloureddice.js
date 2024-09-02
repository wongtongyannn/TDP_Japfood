import React from 'react';

export default class Coloureddice extends React.Component{

state = {
    number:this.props.initialValue
    }

rollDice = () => {
    this.setState({
        number: Math.floor(Math.random() * 6) + 1 
        } //function to generate random integer between 1 to 6
    )};

getColor = () => {
    if (this.state.number === 1) {return "red"}
    else if (this.state.number === 6) {return "green"}
    else {return "black"}
    //if-else function to change color of number based on its value
}

render() {  
    return (
        <React.Fragment>
        <div style={{
        border:"2px solid black",
        padding:"10px",
        width:"50px",
        height:"50px",
        lineHeight: "10px",
        color: this.getColor()
        }}>
        {this.state.number}
        <button onClick={this.rollDice}> roll </button>
        </div>
        </React.Fragment>
    )    
}};