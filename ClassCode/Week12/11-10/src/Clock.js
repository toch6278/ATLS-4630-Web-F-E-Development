import React from 'react';

export default class Clock extends React.Component {
    constructor(props)
    {
        // calls parent class of constructor
        super(props);
        // only place where this.state is being assigned something
        this.state = { date: new Date() }; 

        //keep everything bount 
        this.sayHello = this.sayHello.bind(this); 
    }

    sayHello() {
        console.log(`Hello world! The time is ${this.state.date.toLocaleTimeString()}`);
    }
    sayGoodbye = () =>
    {
        console.log(`Goodbye world! The time is ${this.state.date.toLocaleTimeString()}`);
    }
    
    componentDidMount() 
    {
        this.timeID = setInterval (
            () => this.tick(), 
            100
        );
    }

    componentWillUnmount() 
    {
        clearInterval(this.timerID);
    }
    tick() 
    {
        this.setState({
            date: new Date()
        });
    }

    render()
    {
        //can have more code in your render function 
        return (
            // <div onClick={this.sayHello}>
            <div onClick={this.sayGoodbye}>
              <h1> Hello, world!</h1>
              {/* when working with a class, must have this.props in order to access the property of the component */}
              {/* <h2> It is {this.props.date.toLocaleTimeString()}.</h2> */}
              <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}