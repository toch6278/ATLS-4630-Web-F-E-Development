import React from 'react';
export default class Title extends React.Component{
    constructor(name)
    {
        this.name = name;
    }
    render() {
        return (
            <h1> {name} </h1>
        )
    }
} 