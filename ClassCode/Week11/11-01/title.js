// only going to export one thing per file
// react way of doing things 
// export default function title(name) {
//     const fontSize = '2em';
//     // use string literal to insert code into our string
//     return `<h1 style = "font-size: ${fontSize}"> Hello ${name}! </h1>`
// }

//make more of a react through a class and everything is through a render function
export default class Title {
    constructor(name)
    {
        this.name = name; 
    }

    render() {
        const fontSize = '2em';
        // use string literal to insert code into our string
        return `<h1 style = "font-size: ${fontSize}"> Hello ${this.name}! </h1>`
    }
}