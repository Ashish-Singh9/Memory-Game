console.log("we are connected");
document.addEventListener('DOMContentLoaded',()=>{
    //card Option
    const cardArray=[
        {
            name:'fries',
            img:'img/fries.png'
        },
        {
            name:'fries',
            img:'img/fries.png'
        },
        {
            name:'cheeseburger',
            img:'img/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'img/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'img/hotdog.png'
        },
        {
            name:'hotdog',
            img:'img/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'img/ice-cream.png'
        },
        {
            name:'ice-cream',
            img:'img/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'img/milkshake.png'
        },
        {
            name:'milkshake',
            img:'img/milkshake.png'
        },
        {
            name:'pizza',
            img:'img/pizza.png'
        },
        {
            name:'pizza',
            img:'img/pizza.png'
        }
    ];


cardArray.sort(()=>0.5-Math.random());

const grid=document.querySelector('.grid');
const resultDisplay=document.querySelector('#result');
var cardChosen=[];
var cardChosenId=[];
var cardsWon=[];
//create board
function createBoard(){
    for(let i=0;i<cardArray.length;i++)
    {
        var card=document.createElement('img');
        card.setAttribute('src','img/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        grid.appendChild(card);

    }
}
//check For Math
function checkMath(){
    var cards=document.querySelectorAll('img');
    const optionOneId=cardChosenId[0];
    const optionTwoId=cardChosenId[1];
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardChosen[0] === cardChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'img/white.png')
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click', flipcard)
      cards[optionTwoId].removeEventListener('click', flipcard)
      cardsWon.push(cardChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/blank.png')
      alert('Sorry, try again')
    }
    cardChosen=[]
    cardChosenId=[]
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length===cardArray.length/2)
        resultDisplay.textContent='Congratulations! You Find TThem All!!!';
}
//flip your card
function flipcard(){
    var cardId=this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardChosen.length==2)
    {
        setTimeout(checkMath,500);
    }
}


createBoard();
})