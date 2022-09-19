console.log("hello");

const age = document.querySelector("#age"); 
const output = document.querySelector(".age-output"); 

const submitButton = document.querySelector("#submit");
const dialog = document.getElementById("modal");
//reference for text input 
fullName = document.querySelector("#name");
email = document.querySelector("#email");
jsonText = document.getElementById("jsontext"); 

output.textContent = age.value;

age.addEventListener("input", () => {
    output.textContent = age.value;
});

console.log(submitButton);
submitButton.addEventListener("click", () =>
{
    dialog.showModal(); 
    modalOpen(dialog);
    var data = 
    {
        "name": fullName, 
        "email": email
    };
    data.innerText = JSON.stringify(data); 
    console.log(data.name);

    //play confetti
    // confetti("#particles", {
    //     angle: 90, 
    //     count: 25, 
    //     position: {x: 50, y: 50},
    //     spread: 90,
    //     startVelocity: 60, 
    //     decay: 0.9,
    //     gravity: 1, 
    //     drift: 0,
    //     ticks: 200, 
    //     // colors:
    //     shapes:["square", "circle"],
    //     zIndex: 2000, 
    //     desableForReducedMotion: ture
    // });
}); 

function modalOpen(dialog)
{
    if(dialog.open)
    {
        console.log("Dialog open"); 
    }
    else
    {
        console.log("Dialog closed");
    }
}

//Resource: https://dev.to/tsparticles/how-to-create-confetti-animations-using-a-button-with-tsparticles-56nf
