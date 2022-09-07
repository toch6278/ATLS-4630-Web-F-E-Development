console.log("hello")

// let x = 2; 
// let y = 3; 
// console.log(x + y);

const x = 2; 
let y = 3; 

y = x + y; 
// x = x + y; 
console.log(x); 
//will give an error because you're trying to change the variable x

const str = 'this is a \"string\"'; 
console.log(x); 

// const strExs = "this is bob's"; 
// const template =   `this is a ${x} template ${y}literal`;
// console.log(str); 
// console.log(template); 
// console.log(concat);

const myArray = [0, 2, 7, 8]; 
console.log(myArray);
console.log(myArray[0]);

//add to an array
myArray.push(10); 
console.log(myArray);

const classroom =
{
    building: "ATLAS",
    room: 104
}
console.log(classroom);
console.log(classroom.room);

//add keyvalue pair to a class object 
classroom.occupancyLimit = 30; 
console.log(classroom); 

y = 11; 
if(y <10)
{
    console.log(y); 
}
else
{
    console.log(x); 
}

//template literal 
for (let i = 0; i < myArray.length; i++)
{
    console.log(`index: ${i}`);
}

//for of loop - gets the item inthe array and does it for you
for (const item of myArray)
{
    console.log("value: ${item}"); 
}

//for...in loop 
for (const key in classroom)
{
    console.log(`key1 $[key]`); 
    console.log(`value: $[classoom[key]]); `)
}

//for each 
myArray.forEach(function(item)
{
    console.log(`value: ${item}`);
});

//regular function
function add(x,y)
{
    return x + y; 
}
console.log(add(7,15)); 

// arrow function 
const subtract = (x,y) =>
{
    return x - y;
}

const h1 = document.getElementById("heading"); 
console.log(h1);

const h11 = document.getElementById("heading"); 
// h11 innerText = "hello from js!";

const divs = document.querySelectorAll(".my-div");
for (const div of divs)
{
    div.getElementsByClassName.backgroundColor = "#0000ff";
}

//query seelctor
const div = document.querySelector("div"); 
const button = document.querySelector('button'); 
div.addEventListener('mouseenter', () => ())
{
    div.style.backgroundColor = "FF0000";
};