
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
// class Rabbit 
// {
//     constructor(name, height)
//     {
//         this.name = name; 
//         this.height = height;
//     }
//     sayHello()
//     {
//         console.log(`Hello, my name is ${this.name}, and I am ${this.height}`);
//     }
// }

// const jackRabbit = new Rabbit('Jack', 'very tall'); 
// const peterRabbit = new Rabbit('Peter', 'kinda tall'); 

// jackRabbit.sayHello(); 
// peterRabbit.sayHello();


// 9/22/22 Asynchronous Javascript Notes 

//can throw any type of variable or constant 
// throw 'this is an error!';

// can create a new class by enclosing it 
// throw new Error('this is an error!');

//errors that aren't handled
/*
const input = document.getElementById('input'); 
input.addEventListener('change', function ()
{
    if (input.value > 10)
    {
        //throwing errors stop the function from happening/ like a return statement 
        throw new Error('woah that\'s too big!')
    }
    console.log('thatnks that\'s a good number');
});
*/

//errors are handle

// const input = document.getElementById('input'); 
// /**
//  * this function handles the input value processing 
//  * has the potential to throw an error
//  */

// function handleInput()
// {
//     if(input.value >10)
//     {
//         throw new Error('woah that\'s too big!');
//     }
//     console.lob('thanks that\'s a good number');
// }

// input.addEventListener('change', function ()
// {
//     //code running linearly and just jumping around 
//     //actually runs when the input is fired 
//     try{
//         handleInput(); 
//     } catch(e)
//     {
//         console.log(e); 
//         console.error(e);
//         console.warn(e);  
//     } finally {
//         //this code will run after handling the error
//     }
// });

//synchronous code 
// function takesAReallyLongTime()
// {
//     let sum = 0; 
//     for (let i = 0; i < 1000000; i++)
//     {
//         sum += i; 
//     }
//     console(`the really big sum is ${sum}`);
//     return sum; 
// }

// setTimeout(takesAReallyLongTime); 
// const result = takesAReallyLongTime(); 
// console.lob(result);

// could also do an anonymous function 
// setTimeout(function ()
// {
//     const result = takesAReallyLongTime(); 
//     console.log(result); 
// });

// console.log('this log takes place after takesAReallyLongTime');

//async with promises - asynch stuff takes a really long time 
// function takesAReallyLongTimeWithPromises()
// {
//     return new Promise(function(resolve, reject)
//     {
//         let sum = 0; 
//         for (let i = 0; i < 100000; i++)
//         {
//             sum += i; 
//         }
//         console.log(`the really big sum is ${sum}`); 
//         resolve(sum); 
//     }); 
//     //resolve acts like return 
// }
// takesAReallyLongTimeWithPromises() 
//     .then(function(result)
//     {
//         console.log(result); 
//     })
//     .catch(function(error)
//     {
//         console.error(error); 
//     }); 
// console.log('this log takes place after takesAReallyLongTime');

//async code with asynch function 
// async function takesAReallyLongTimeAsync() {
//     let sum = 0; 
//     for (let i = 0; i < 100000; i++)
//     {
//         sum += i; 
//     }
//     console.log(`the really big sum is ${sum}`); 
//     return sum;  
// }
// // takesAReallyLongTimeAsync()
// //     .then(function(result) {
// //         console.log(result); 
// //     });

// //can have an await
// const result = await takesAReallyLongTimeAsync(); 
// // async function doesSomethingElse() {
// //     const result1 = await doesSomethingElse();
// //     const result2 = await aThirdThing();
// // }

// //force it to be synchronous with await 
// console.log(result); 

// console.log('this log takes place after takesAReallyLongTime');



//create recursive loop with setTimeout
//doesn't interrupt interaction with the page 
// let counter = 0; 
// function drawLoop()
// {
//     console.log('loop!'); 
//     console.log(counter); 
//     counter++;
//     //can limit framerate but setting number of milliseconds
//     setTimeout(drawLoop,100); 
//     //call function to call synchronously - will set off error and make page load slowly
//     // drawLoop();
// }

// setTimeout(drawLoop);

//do better with setInterval
// let counter = 0; 
// function loop()
// {
//     console.log('loop!'); 
//     console.log(counter); 
//     counter++; 
// }
// const intervalId = setInterval(loop, 100); 
// button.addEventListener('click', () => {
//     clearInterval(intervalId); 
// });

//do it best with requestAnimationFrame 
let counter = 0; 
function loop()
{
    console.log('loop!'); 
    console.log(counter); 
    counter++; 

    requestAnimationFrame(loop); 
}
requestAnimationFrame(loop); 