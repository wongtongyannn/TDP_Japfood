import React from 'react';

export default class Conditionalrendering extends React.Component{

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
        <React.Fragment>
        <div style={{
        border:"2px solid black",
        padding:"10px",
        width:"50px",
        height:"80px",
        lineHeight: "10px", // Aligns the number vertically within the div    
        }}>
        {this.state.number}
        {this.state.number % 2 === 0 ? <p> Number is even</p> : null}
        <button onClick={this.rollDice}> roll </button>
        </div>
        </React.Fragment>
    )    
}};