import Box from './Box.js';

export default class RedBox extends Box
{
    constructor(width, height, x, y)
    {
        //browser will yell at you if you don't do this 
        super('#A40E4C', width, height, x, y);
    }
    
    //onMouseEnter() is replaced by the child class 
    onMouseEnter()
    {
        this.el.style.backgroundColor = '#00000'; 
        console.log("hello world!");
    }
    onMouseLeave()
    {
        this.el.style.backgroundColor = '#A40E4C';
    }
}