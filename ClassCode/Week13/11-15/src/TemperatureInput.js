import React from "react";
import Calculator from "./Calculator";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this); 
    }

    // handleChange(e) {
    //     this.setState({temperature: e.target.value});
    // }
    handleChange(e)
    {

    }

    render() {
        const temperature = this.props.temperature; 
        const scale = this.props.scale; 
        return (
          <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}</legend>
            <input value={temperature}
                   onChange={this.handleChange} />
          </fieldset>
        );
      }
}