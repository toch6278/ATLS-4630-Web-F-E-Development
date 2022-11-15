import React from 'react'; 

export default class Form extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {value: 'Torsh'};
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event) {
        // this is the not react state
        const value = event.target.value; 
        // linking to actual react state
        this.setState({value: value });
    }

    handleSubmit(event) {
        console.log(`value is: ${this.state.value}!`); 
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor = "name"> 
                    Name: 
                </label> 
                <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
                <input type = "submit" />
            </form> 
        );
    }
}