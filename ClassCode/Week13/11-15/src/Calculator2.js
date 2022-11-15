import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator2 extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        temperature : '', 
        scale : 'c'
      }

      this.toCelsius = this.toCelsius.bind(this);
      this.toFahrenheit = this.toFahrenheit.bind(this);
      this.tryConvert = this.tryConvert.bind(this);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    } 

    toCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    }
    
    toFahrenheit(celsius) {
      return (celsius * 9 / 5) + 32;
    }
    tryConvert(temperature, convert) {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const temperature = this.state.temperature;
      return (
        <div>
            <TemperatureInput scale = "c" temperature ={temperature} onTemperatureChange = {this.handleCelsiusChange}/> 
            <TemperatureInput scale = "f" temperature = {temperature} onTemperatureChange = {this.handleFahrenheitChange}/> 
        </div>
      );
    }
  }