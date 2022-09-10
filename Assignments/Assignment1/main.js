console.log("hello");

let mode = document.querySelector('#mode');
let text = document.getElementsByClassName("top"); 

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

mode.addEventListener('click', buttonClicked);
window.addEventListener('mousemove', mouseMoved); 

function buttonClicked()
{
    console.log('clicked'); 
    document.body.style.backgroundColor = 'black'; 
    top.style.color = "#F7F7ED";
    console.log('font color changed'); 
}

function mouseMoved()
{
    mouse.x = event.x; 
    mouse.y = event.y; 
    console.log(mouse.x,',', mouse.y);  
}

function adjustVolume()
{

}