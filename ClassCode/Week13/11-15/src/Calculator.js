import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.handleChange = this.handleChange.bind(this);
    //   this.state = {temperature: ''};
    // }
  
    // handleChange(e) {
    //   this.setState({temperature: e.target.value});
    // }
  
    render() {
    //   const temperature = this.state.temperature;
      return (
        <div>
          {/* <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} /> */}
            <TemperatureInput scale = "c" /> 
            <TemperatureInput scale = "f" /> 
          {/* <BoilingVerdict
            celsius={parseFloat(temperature)} /> */}
        </div>
      );
    }
  }