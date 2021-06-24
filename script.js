(()=>{
    const generateDeck = (a) => {
        // declare card elements
        const suits = ["Spades", "Diamonds", "Club", "Heart"];
        const values = [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        ];

        // empty array to contain cards
        let a = [];

        // create a a of cards
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = { Value: values[x], Suit: suits[i] };
                a.push(card);
            }
        }

        // shuffle the cards
        for (let i = a.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

    const showCards = (a) => {
        console.log('The first five cards are:');

        // display 5 results
        for (let i = 0; i < 5; i++) {
            console.log(`${a[i].Value} of ${a[i].Suit}`)
        }
    }
    
    document.getElementById("start").addEventListener("click", () => {
        let deck1 = generateDeck();
        showCards(deck1);
    })
})();