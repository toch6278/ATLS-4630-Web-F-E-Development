console.log('hello');
// querySelector's are much slower than getElementByID
let button = document.getElementById('#button');

//() => means it's an anonymous function 
// button.addEventListener('click', () => {
//     console.log("clicked!");
//     //process form here
//     const firstTextInput = document.querySelector('#first-text-input'); 
//     console.log(firstTextInput.value); 

//     const colorInput = document.querySelector('#color-input'); 
//     console.log(colorInput.value); 
//     const form = document.querySelector('form'); 
//     form.style.backgroundColor = colorInput.value; 

//     //checkbox
//     const checkboxesElement = document.querySelector('#checkboxes'); 
//     const checkboxes = checkboxesElement.querySelectorAll('input'); 
//     for (const checkbox of checkboxes)
//     {
//         console.log(checkbox.checked); 
//     };
// });
let input = document.querySelector('#text-input'); 
input = document.getElementById('text-input');
console.log(input); 
input.addEventListener('change', () =>
{
    console.log(input.value)
    if (input.value == 2)
    {
        console.log('input.value = 2'); 
    }
    if (input.value === 2)
    {
        console.log('input.value === 2');
    }
    console.log(typeof input.value); 
    console.log( typeof 2); 
});

let inputTypo = document.getElementById('textinput'); 
inputTypo.addEventListener('change', () =>
{
    console.log(inputTypo.value); 
})

//disable form from refreshing the page when you press enter 
const myForm = document.getElementById('my-form'); 
myForm.onsubmit = () =>
{

}; 
//event is just a a parameter that gets passed through
myForm.addEventListener('submit', (event) =>
{
    //prevent default action from form submitting 
    event.preventDefault(); 
});