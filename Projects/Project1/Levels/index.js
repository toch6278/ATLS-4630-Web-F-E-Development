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
    console.log(e.target); 
    
    
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

        let card1Img = card1.querySelector("img").src; 
        let card2Img = card2.querySelector("img").src; 
        matchCards(card1Img, card2Img);
    }
    
}

function matchCards(img1, img2) 
{
    if (img1 === img2)
    {
        return console.log("card matched"); 
    }
    console.log("no match");
}