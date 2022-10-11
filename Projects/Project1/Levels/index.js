//card mechanism
const cards = document.querySelectorAll(".card"); 

let card1, card2; 

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
    }
    
}

function matchCards(img1, img2) 
{
    console.log(img1); 
    console.log(img2); 
    if (img1 === img2)
    {
        // card1.style.display = "none"; 
        // card2.style.display = "none";
        
        card1.querySelector("#mochi").disabled = true; 
        card2.querySelector("#mochi").disabled = true;
        return console.log("card matched"); 
    }
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
}