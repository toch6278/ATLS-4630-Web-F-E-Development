import React from 'react';

//multiple file component
// import 'Title.css';

export default class Title extends React.Component{
    // constructor(name)
    // {
    //     //call super constructor of the constructor in order to extend
    //     //associate with react very heavily 
    //     super();
    //     // this.name = name;
    // }
    // render() {
    //     return (
    //         // <h1> {this.name} </h1>
    //         <h1> Hello world! </h1>
    //     );
    // }

    //never actually call constructor
    constructor(props)
    {
        //call super constructor of the constructor in order to extend
        //associate with react very heavily 
        super();
        //identify properties (props)
        this.name = props.name;

        //property validations
        // this.name = props.name =/= undefined ? props.name : 'default name';
    }
    // render() {
    //     return (
    //         // <h1> {this.name} </h1>
    //         <h1> Hello {this.name}! </h1>
    //     );
    // }

    //react way of adding styling 
    render() {
        const styles = {
            fontSize: '2em',
            color: 'lightblue'
        };
        //if you wanted to style your divs a certain way 
        // const divStyles
        return (
            // <h1> {this.name} </h1>
            <h1 style = {styles}> Hello {this.name}! </h1>
            // <h1 style = {h1Styles}> Hello {this.name}! </h1>
            // <h1 className = "my-heading" style = {h1Styles}> Hello {this.name}! </h1>
        );
    }
} 