console.log('hello');

// document.getElementById("play-button").onclick= function()
// {
//     location.href = "level1.html";
// };

let levels = ["Levels/level1.html","level2.html", "level3.html"];
for(i = 0; i < document.getElementsByClassName("options").length; i++)
{
  document.getElementsByClassName("options")[i].addEventListener("click", optionClicked, false);
  document.getElementsByClassName("options")[i].id = i; 
}

//detects the option that is clicked 
function optionClicked(e)
{
    console.log("yo");
    dow = e.target.id; 
    window.open(levels[dow], '_self'); 
}

const playButton = document.querySelector('#play-button'); 
console.log(playButton);
playButton.addEventListener('click', () => {
  document.location.href = "Levels/level1.html";
});

// function onClickFn()
// {
//   document.location.href = "level1.html";
// }

//https://www.kirilv.com/canvas-confetti/
//confetti level complete 
/*
var count = 200; 
var defaults = 
{
    origin: 
    {
        y: 0.7
    }
};

function fire (particleRatio, opts)
{
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
}

fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });


  //flip the cards 
  const card = document.querySelector('.card__iner'); 

  card.addEventListener('click', function()
  {
    card.classList.toggle('is-flipped');
  })
*/