console.log("hello");

let mode = document.querySelector('#mode');
const text = document.getElementsByClassName("top"); 
const box = document.getElementsByClassName("info"); 
const manip1 = document.getElementsByClassName('manipulators'); 
var toggle = false; 

var mouse = 
{
    x: undefined, 
    y: undefined
}

let circle = document.getElementById('circle');

const obj = document.createElement('audio'); 
console.log(obj.volume); 
obj.volume = 0.75; 
console.log(obj.volume); 
let audio = document.getElementById('#music');

var min = 0; 
var max = 100; 

mode.addEventListener('click', buttonClicked);
window.addEventListener('mousemove', mouseMoved); 

function buttonClicked()
{
    // console.log("entering")
    // if(toggle == false)
    // {
        console.log('clicked'); 
        document.body.style.backgroundColor = 'black'; 
        text[0].style.color = "#F7F7ED";
        console.log('font color changed');
        box[0].style.backgroundColor = 'gray';
        box[0].style.color = 'white';  
        manip1[0].style.color = "#F7F7ED"; 
        toggle = true; 
    // }
    // if(toggle == true)
    // {
        // console.log('clicked again'); 
        // document.body.style.backgroundColor = '#F7F7ED'; 
        // text[0].style.color = "black";
        // console.log('font color changed back');
        // box[0].style.backgroundColor = '#D9D9D9';
        // box[0].style.color = 'black';  
        // manip1[0].style.color = "black"; 
        // toggle = false;
    // }

}

function mouseMoved()
{
    mouse.x = event.x; 
    mouse.y = event.y; 
    console.log(mouse.x,',', mouse.y);  
    document.write(mouse.x,',', mouse.y);
}

function adjustVolume()
{
    // if()
}