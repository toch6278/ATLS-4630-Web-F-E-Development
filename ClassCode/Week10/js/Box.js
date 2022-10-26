// export multiple files from the js
export default class Box 
{
    // create a stylized visual box 
    constructor(color, width, height, x, y)
    {
        this.el = document.createElement('div'); 
        this.el.style.backgroundColor = color; 
        this.el.style.width =  `${width}px`;
        this.el.style.height =  `${height}px`;
        this.el.style.position = 'absolute';
        //relative is relative to parent
        this.el.style.left = `${x}px`;
        this.el.style.top = `${y}px`;

        //arrow events 

        this.onMouseEnter = this.onMouseEnter.bind(this); 
        this.onMouseLeave = this.onMouseLeave.bind(this); 

        this.el.addEventListener('mouseenter', this.onMouseEnter);
        this.el.addEventListener('mouseleave', this.onMouseLeave);
        // could also do 
        //when binding here won't permanently change "this" but will be called each time 
        // this.el.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    }

    //arrow function taht is already bound 
    onMouseEnter()
    {
        //do something about the mouse entering 
        this.el.style.backgroundColor
    }

    //if an element is bound, that means that it's creating another "this" that isn't of type el 
    //must use the bind as a callback function 
    //using arrow functions is the simpler solution but take up a lot more space 
    // onMouseLeave = () =>
    // {
    //     //do something about the mouse leaving
    // }
    onMouseLeave()
    {
        //do something about the mouse leaving
    }

    getElement()
    {
        return this.el;
    }
}