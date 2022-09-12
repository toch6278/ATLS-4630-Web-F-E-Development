console.log("hello");

let mode = document.querySelector('#mode');
const text = document.getElementsByClassName("top"); 
const box = document.getElementsByClassName("info"); 
const manip1 = document.getElementsByClassName('manipulators'); 
var toggle = false; 

const cursorTag = document.querySelector("div.cursors");
const ball = cursorTag.querySelector("div");

var mouse = 
{
    x: undefined, 
    y: undefined
}

// var randomColor = Math.floor(Math.random()*)

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
    ///}

}

function mouseMoved()
{
    mouse.x = event.x; 
    mouse.y = event.y; 
    console.log(mouse.x,',', mouse.y);  
    // document.write(mouse.x,',', mouse.y);
    //SuperHi - How to make a custom mouse cursor with text hover and trailer effect with HTML, CSS and Javascript
    ball.style.left = event.pageX +"px"; 
    ball.style.top = event.pageY + "px";
}

// document.addEventListener("mousemove", function(event){
//     ball.style.left = event.pageX +"px"; 
//     ball.style.top = event.pageY + "px";
// })

function adjustVolume()
{
    // if()
}