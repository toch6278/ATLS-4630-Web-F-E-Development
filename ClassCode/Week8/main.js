
// import {month, day, printTheDate} from './today.js';

// import {thisMonth as month, day, printTheDate} from './today.js';
//same as 
import * as Today from './today.js'


// type module gets you out of the local host 
// console.log('hello');
// console.log(month); 

// printTheDate();
// function incrementDay()
// {
//     day++; 
// }

// incrementDay(); 
// printTheDate();

//working with multiple libraries help with grouping things together
Today.printTheDate(); 
console.log(Today.month); 
