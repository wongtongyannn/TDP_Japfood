import React from 'react';

export default class Tickleme extends React.Component{

    state = {
        value: "Tickle me!!"
        }

    hover = () => {
        alert("that tickles!") // to change the message to "hovered" when div is hovered
        }

    render() {  
        return (
            <div onMouseEnter={this.hover} style={{
            border:"2px solid black",
            padding:"10px",
            width:"50px",
            height:"50px"
            }}>{this.state.value}</div>
        )
    }
     };