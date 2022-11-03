console.log('hello world');

function sayHello(name)
{
    console.log(`Hello ${name}!`); 
}

sayHello("Torsh"); 
sayHello(1); 

// say don't want to pass in a number
function sayHello2(name: String)
{
    console.log(`Hello2 ${name}!`); 
}

sayHello2("Torsh"); 
//will get a squiggly line because number 1 isn't a string
// sayHello2(1); 

// can specify return type of functions
function sayHello3(name: String): String
{
    console.log(`Hello3 ${name}!`);
    return `Hello3 ${name}!`; 
}
sayHello3("Torsh"); 

//------------------INTERFACES-----------------------
//interfaces are like classes but don't have constructors 
//strict defintion of what the object is shaped like
interface Dog
{
    //giving type instead of an actual value
    name: String, 
    age: number
}

//will need all parameters of interface (like in C# Unity)
//will get squiggly lines if don't use all definitions in interface
const buddy: Dog = {
    name: 'Buddy',
    age: 12
};

const cookie: Dog = {
    name: 'Cookie',
    age: 3
};

//before in javascript
// class Classroom {
//     constructor()
//     {
//         this.roomNumber = 104;
//     }
// }
//now with typescript
// class Classroom {
//     public roomNumber: number; 
//     constructor(roomNumber)
//     {
//         this.roomNumber = roomNumber;
//     }
// }
// const atlas104 = new Classroom(104);
// console.log(atlas104.roomNumber);

//having a private variable
//can't access it outside of class and need to create another getroom number funciton
class Classroom {
    private roomNumber: number; 
    constructor(roomNumber)
    {
        this.roomNumber = roomNumber;
    }
    getRoomNumber(): number {
        return this.roomNumber; 
    }
}
const atlas104 = new Classroom(104);
console.log(atlas104.getRoomNumber());