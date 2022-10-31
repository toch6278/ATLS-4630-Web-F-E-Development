// lowdash was modeled after an even older library called underscore
// number of seconds since Jan 1970 
// console.log(_.now());
//built in javascript function that does the same thing as above
// console.log(Date.now());

import * as _ from 'lodash';


//this one worked
// function sayHello(name)
// {
//     const p = document.createElement('p'); 
//     p.innerHTML = `Hello ${name}!`;
//     document.body.append(p); 
// }

function sayHello(name, times)
{
    for (let i = 0; i < times; i++)
    {
        const p = document.createElement('p'); 
        p.innerHTML = `Hello ${name}, for the ${i}th time!`;
        document.body.append(p); 
    }
    
}
// 1500 is 1.5 seconds in milliseconds
//typically written like this in javascript
// _.delay(() => {sayHello('Peter')}, 1500)
// _.delay(sayHello('Peter'), 1500)
// how lowdash does it
// _.delay(sayHello, 1500, 'Peter');

const input = document.querySelector('input');
input.addEventListener('change', () => {
    console.log('changed!');
    const times = _.clamp(input.value, 0 , 10); 
    // need to do something with the input value 
    _.delay(sayHello, 1500, 'Peter', times);
})