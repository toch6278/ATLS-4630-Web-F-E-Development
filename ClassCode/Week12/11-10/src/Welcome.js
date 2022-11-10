import React from "react";

// export default class Welcome extends React.Component 
// {
//     render()
//     {
//         let title; 
//         if (this.props.name)
//         {
//             // return(
//                 title = <h1> Hello {this.props.name}! </h1>
//             // );
//         }
//         else{
//             // return (
//               title = <h1> Hello stranger! </h1>
//             // );
//         }
//         // return title;
//         return (
//             <div>
//                 {title}
//             </div>
//         );
//     }

//using states as props
export default class Welcome extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {name: this.props.name}

        //remember to do binding 
        this.changeName = this.changeName.bind(this);
    }

    changeName()
    {
        this.setState({name: 'Bob'});
    }

    render()
    {
        let title; 
        if (this.state.name)
        {
            // return(
                title = <h1> Hello {this.state.name}! </h1>
            // );
        }
        else{
            // return (
              title = <h1> Hello stranger! </h1>
            // );
        }
        // return title;
        return (
            <div onClick = {this.changeName}>
                {title}
                <h2>{this.state.name ? this.state.name : 'stranger' }</h2>
            </div>
        );
    }
}