console.log('hello');
// import Box from './Box.js';
// const box = new Box('#A40E4C', 200, 100, 100, 150); 

// document.body.appendChild(box.getElement());

//after creating the RedBox class 
import RedBox from './RedBox.js';
import BlueBox from './BlueBox.js';

const redbox = new RedBox(200, 100, 100, 150);
const bluebox = new BlueBox(300, 50); 

document.body.appendChild(redbox.getElement());
document.body.appendChild(bluebox.getElement());