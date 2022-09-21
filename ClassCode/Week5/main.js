
/*
**** Basic, lots of repeating *****
const jackRabbit = 
{
    name: 'Jack', 
    height: 'very tall',
};

const peterRabbit = 
{
    name: 'Peter',
    height: 'kinda tall',
};

//using string literals
console.log(`hello, my name is ${jackRabbit.name}, and I am ${jackRabbit.height}`);
console.log(`hello, my name is ${peterRabbit.name}, and I am ${peterRabbit.height}`);
*/

/*
***** A little bit better, using functions *****
const jackRabbit = 
{
    name: 'Jack', 
    height: 'very tall',
};

const peterRabbit = 
{
    name: 'Peter',
    height: 'kinda tall',
};

function sayHello(rabbit)
{
    console.log(`hello, my name is ${rabbit.name}, and I am ${rabbit.height}`);
}
sayHello(jackRabbit); 
sayHello(peterRabbit);
*/

//even better, cloning objects
/*
const jackRabbit = 
{
    name: 'Jack', 
    height: 'very tall',
};

const peterRabbit = structuredClone (jackRabbit); 
peterRabbit.name = 'Peter';
peterRabbit.height = 'kinda tall';

function sayHello(rabbit)
{
    console.log(`hello, my name is ${rabbit.name}, and I am ${rabbit.height}`);
}
sayHello(jackRabbit); 
sayHello(peterRabbit);
*/

// even better, using object prototypes
/*
const rabbitProto = 
{
    name: '', 
    height: '',
    sayHello: function()
    {
        //this is referring to the object being used at the moment 
        console.log(`Hello, my name is ${this.name}, and I am ${this.height}`); 
    },
};

//don't really have to worry about object prototypes because we have classes now 
const jackRabbit = Object.create(rabbitProto); 
const peterRabbit = Object.create(rabbitProto); 

jackRabbit.name = 'Jack';
jackRabbit.height = 'very tall'; 

peterRabbit.name = 'Peter';
peterRabbit.height = 'kinda tall'; 

jackRabbit.sayHello(); 
peterRabbit.sayHello();
*/

//almost to the best, use "constructor function"
//meaning this is a lot more scalable
/*
function createRabbit(name, height)
{
    const rabbitProto = 
    {
        name: '', 
        height: '',
        sayHello: function()
        {
            //this is referring to the object being used at the moment 
            console.log(`Hello, my name is ${this.name}, and I am ${this.height}`); 
        },
    };
    const rabbit = Object.create(rabbitProto); 

    //pass in name to whatever is written in the function
    rabbit.name = name;
    rabbit.height = height; 
    return rabbit; 
}

const jackRabbit = (createRabbit('Jack', 'very tall')); 
const peterRabbit = (createRabbit('Peter', 'kinda tall')); 

jackRabbit.sayHello();
peterRabbit.sayHello();
*/

//best: using classes 
class Rabbit 
{
    constructor(name, height)
    {
        this.name = name; 
        this.height = height;
    }
    sayHello()
    {
        console.log(`Hello, my name is ${this.name}, and I am ${this.height}`);
    }
}

const jackRabbit = new Rabbit('Jack', 'very tall'); 
const peterRabbit = new Rabbit('Peter', 'kinda tall'); 

jackRabbit.sayHello(); 
peterRabbit.sayHello();