console.log("hello");

const age = document.querySelector("#age"); 
const output = document.querySelector(".age-output"); 

output.textContent = age.value;

age.addEventListener("input", () => {
    output.textContent = price.value;
});