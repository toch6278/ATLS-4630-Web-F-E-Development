//Resources: https://www.youtube.com/watch?v=DABkhfsBAWw
//card mechanism
cardcount = 8;
const cards = document.querySelectorAll(".card"); 
var modal = document.getElementById("end-game");

let evenCount = true; 

let card1, card2; 


var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

cards.forEach(card => {
    // console.log(cards);
    card.addEventListener("click",flipCard); 
});
    

function flipCard(e)
{
    //gets user clicked card
    let clickedCard = e.target; 
    //identifies what the element is in the html script
    // console.log(e.target); 
    
    //if the card pressed wasnt the first card chosen
    if(clickedCard !== card1)
    {
        // made the cards part of the flip class when clicked
        clickedCard.classList.add('flip'); 
        
        if(!card1)
        {
            //return chosen card1
            return card1 = clickedCard; 
        }
        card2 = clickedCard; 
        console.log(card1,card2);

        let card1Img = card1.querySelector("#mochi").src; 
        let card2Img = card2.querySelector("#mochi").src; 
        // let card1Img = document.getElementsByClassName("view back-view").src; 
        // card2Img = document.querySelector("view back-view"); 
        // console.log(card1Img); 
        // console.log(card2Img); 
        matchCards(card1Img, card2Img);
        console.log(card1);
    }
    
}

function matchCards(img1, img2) 
{
    // evenCount = false;
    // console.log(evenCount);
    console.log(img1); 
    console.log(img2); 
    if (img1 === img2)
    {
        // evenCount = true;
        // console.log(evenCount);
        img1 = null; 
        img2 = null;
        setTimeout(() =>{
        document.getElementById("mochi").innerHTML = ""
        }, 3000);

        card1.style.display = "none"; 
        card2.style.display = "none";
        cardcount = cardcount - 2;
        console.log(cardcount);

        card1.querySelector("#mochi").disabled = true; 
        card2.querySelector("#mochi").disabled = true;
         
        if(cardcount == 0)
        {
            openModal();
            //play confetti when level complete
            var interval = setInterval(function() {
                var timeLeft = animationEnd - Date.now();
              
                if (timeLeft <= 0) {
                  return clearInterval(interval);
                }
              
                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
              }, 250);

            // return to home page
            setTimeout(() => {
                //adding shake to class to both card after 400ms        
                // event.preventDefault();
                document.location.href = "../index.html";
            }, 2000);
        }
        return console.log("card matched"); 
    }
    else
    {
        console.log("no match");

        setTimeout(() => {
            //adding shake to class to both card after 400ms        
            card1.classList.add("shake");
            card2.classList.add("shake");
        }, 400);

        setTimeout(() => {
            //adding shake to class to both card after 400ms        
            card1.classList.remove("shake", "flip");
            card2.classList.remove("shake", "flip")
            card1 = ""; 
            card2 = "";
        }, 1200);

        // evenCount = true; 
        // console.log(evenCount);
    }

}

function openModal()
{
    modal.style.display = "block";
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
