import React from 'react';

export default class Contactusform extends React.Component {
    state = {
    'firstname':'',
    'lastname':'',
    'enquiries':'',
    'howdidyouhearaboutus':'',
    'choiceofcontact':[]
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

isFormComplete = () => { //check if all fields are filled
    const {firstname, lastname, enquiries, howdidyouhearaboutus, choiceofcontact} = this.state;
    return (firstname && lastname && enquiries && howdidyouhearaboutus && choiceofcontact);
}

handleSubmit = (e) => {
    e.preventDefault(); //prevent the form from submitting
    const {firstname, lastname, enquiries, howdidyouhearaboutus, choiceofcontact} = this.state;
    alert ('First Name: ' + firstname + '\n' 
        + 'Last Name: ' + lastname + '\n' 
        + 'Enquiries: ' + enquiries + '\n' 
        + 'How did you hear about us: ' + howdidyouhearaboutus+ '\n'
        + 'Choice of contact: ' + choiceofcontact.join(','))
    }

render() {
    return (
    <React.Fragment>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>First Name:</label>
                <input name="firstname" type="text" value={this.state.firstname} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input name="lastname" type="text" value={this.state.lastname} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Enquiries:</label>
                <input name="enquiries" type="radio" value="Support"
                checked={this.state.enquiries==='Support'} onChange={this.updateFormField}/>Support
                <input name="enquiries" type="radio" value="Sales"
                checked={this.state.enquiries==='Sales'} onChange={this.updateFormField}/>Sales
                <input name="enquiries" type="radio" value="Marketing"
                checked={this.state.enquiries==='Marketing'} onChange={this.updateFormField}/>Markerting
            </div>
            <div>
                <label>How did you hear about us:</label>
                <select name="howdidyouhearaboutus" value={this.state.howdidyouhearaboutus} onChange={this.updateFormField}>
                <option value="">Select</option>
                <option value="Word of Mouth">Word of Mouth</option>
                <option value="Advertisment">Advertisment</option>
                <option value="Social Media">Social Media</option>
                <option value="Others">Others</option>
                </select>
            </div>
            <div>
                <label>Choice of contact:</label>
                <input type="checkbox" name="choiceofcontact" value="Email" checked={this.state.choiceofcontact.includes('Email')} onChange={this.updateFormField}/>Email
                <input type="checkbox" name="choiceofcontact" value="Phone Number" checked={this.state.choiceofcontact.includes('Phone Number')} onChange={this.updateFormField}/>Phone Number
                <input type="checkbox" name="choiceofcontact" value="Slow Mail" checked={this.state.choiceofcontact.includes('Slow Mail')} onChange={this.updateFormField}/>Slow Mail
            </div>
            <button type="submit" disabled={!this.isFormComplete()}> Submit </button>
        </form>
    </React.Fragment>
);
}
}