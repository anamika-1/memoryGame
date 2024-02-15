const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png', 
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png', 
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png', 
    },
    {
        name: 'pizza',
        img: 'img/pizza.png', 
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png', 
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png', 
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png', 
    },
    {
        name: 'pizza',
        img: 'img/pizza.png', 
    }
]
cardArray.sort(() => 0.5 - Math.random())

const alerts = document.querySelector('#alertMsg')
const grid = document.querySelector('#grid')
const scorecard = document.querySelector('#scorecard')
const resultDisplay = document.querySelector('#result')
let cardChoosen = []
let cardChoosenIds = []
const cardWon = []


function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}
createBoard()


function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChoosenIds[0]
    const optionTwoId = cardChoosenIds[1]
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','img/blank.png')
        cards[optionTwoId].setAttribute('src','img/blank.png')
        alerts.style.visibility = "visible"
        alerts.textContent = "You have clicked the same image!"
    }



    if(cardChoosen[0] === cardChoosen[1]){
        alerts.style.visibility = "visible"
        alerts.textContent = "Yay!You found a Match"
        cards[optionOneId].setAttribute('src','img/white.png')
        cards[optionTwoId].setAttribute('src','img/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardWon.push(cardChoosen)
    }
    else{
        cards[optionOneId].setAttribute('src','img/blank.png')
        cards[optionTwoId].setAttribute('src','img/blank.png')
        alerts.style.visibility = "visible"
        alerts.textContent = "Sorry try again!"
        
    }
    cardChoosen = []
    cardChoosenIds = []
    resultDisplay.textContent = cardWon.length
    if(cardWon.length == cardArray.length/2){
        alerts.style.visibility = "hidden"
        scorecard.textContent = "Congrats! You found them All"
        scorecard.style.width = "400px"
    }
}
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardChoosen.push(cardArray[cardId].name)
    cardChoosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
