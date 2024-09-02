import React from 'react';

export default class Surveyform extends React.Component {
    state = {
    'name':'',
    'colour':'',
    'country':'',
    'fruits':[]
    };

updateFormField = (e) => {
    const {name, value, type, checked} = e.target;

    if (type === 'checkbox') {
        this.setState(prevState => {
            const currentValues = prevState[name];
            const modifiedValues = checked
            ? [...currentValues, value]
            : currentValues.filter(item => item !== value);

        return { [name]:modifiedValues };   
    }); 
    } else {
        this.setState({[name]:value});
    }
}

render() {
    return (
    <React.Fragment>
    <div>
        <label>Name:</label>
        <input name="name" type="text" value={this.state.name} onChange={this.updateFormField}/>
    </div>
    <div>
        <label>Favourite Colour:</label>
        <input name="colour" type="radio" value="red"
        checked={this.state.colour==='red'} onChange={this.updateFormField}/>Red
        <input name="colour" type="radio" value="blue"
        checked={this.state.colour==='blue'} onChange={this.updateFormField}/>Blue
        <input name="colour" type="radio" value="green"
        checked={this.state.colour==='green'} onChange={this.updateFormField}/>Green
    </div>
    <div>
        <label>Country:</label>
        <select name="country" value={this.state.country} onChange={this.updateFormField}>
        <option value="">Select</option>
        <option value="singapore">Singapore</option>
        <option value="malaysia">Malaysia</option>
        <option value="indonesia">Indonesia</option>
        </select>
    </div>
    <div>
        <label>Fruits:</label>
        <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.includes('apple')} onChange={this.updateFormField}/>Apple
        <input type="checkbox" name="fruits" value="orange" checked={this.state.fruits.includes('orange')} onChange={this.updateFormField}/>Orange
        <input type="checkbox" name="fruits" value="pineapple" checked={this.state.fruits.includes('pineapple')} onChange={this.updateFormField}/>Pineapple
        <input type="checkbox" name="fruits" value="durian" checked={this.state.fruits.includes('durian')} onChange={this.updateFormField}/>Durian
    </div>
    <button>Submit</button>
    </React.Fragment>
);
}
}