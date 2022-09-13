console.log('hello');
// querySelector's are much slower than getElementByID
let button = document.getElementById('#button');

//() => means it's an anonymous function 
button.addEventListener('click', () => {
    //process form here
    const firstTextInput = document.querySelector('#first-text-input'); 
    console.log(firstTextInput.value); 

    const colorInput = document.querySelector('#color-input'); 
    console.log(colorInput.value); 
    const form = document.querySelector('form'); 
    form.style.backgroundColor = colorInput.value; 

    //checkbox
    const checkboxesElement = document.querySelector('#checkboxes'); 
    const checkboxes = checkboxesElement.querySelectorAll('input'); 
    for (const checkbox of checkboxes)
    {
        console.log(checkbox.checked); 
    }
})