import React from "react";

export default class List extends React.Component{
    render()
    {
        const numbers = [1,2,3,4,7]; 
        // const listItems = numbers.map(number => <li> {number} </li>);
        const listItems = this.props.numbers
        .map((number, index) => <li key = {`${number} = ${index}`}>{number}</li>);
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}