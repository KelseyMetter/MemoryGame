/*push, querySelector, setAttribute(), getAttribute(), createElement(), appendChild(), Math.random(), sort(), For loops*/

document.addEventListener("DOMContentLoaded", () => {

    const cardArray = [
        {
            name: 'rainbow',
            img: 'images/11.jpg'
        },
        {
            name: 'rainbow',
            img: 'images/11.jpg'
        },
        {
            name: 'redRose',
            img: 'images/12.jpg'
        },
        {
            name: 'redRose',
            img: 'images/12.jpg'
        },
        {
            name: 'bouquet',
            img: 'images/13.jpg'
        },
        {
            name: 'bouquet',
            img: 'images/13.jpg'
        },
        {
            name: 'sunflowers',
            img: 'images/14.jpg'
        },
        {
            name: 'sunflowers',
            img: 'images/14.jpg'
        },
        {
            name: 'pink',
            img: 'images/15.jpg'
        },
        {
            name: 'pink',
            img: 'images/15.jpg'
        },
        {
            name: 'blue',
            img: 'images/16.jpg'
        },
        {
            name: 'blue',
            img: 'images/16.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create your board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank1.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white1.jpg');
            cards[optionTwoId].setAttribute('src', 'images/white1.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank1.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank1.jpg');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()
})
