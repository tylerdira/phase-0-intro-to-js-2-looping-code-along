// Code your solutions in this file
// for  (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ['teddy bear', 'drone', 'doll']

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)

//     }
//     return gifts;
// }

// wrapGifts(gifts);




function writeCards(stringNames, eventNames){
    for (let i = 0; i < stringNames.length; i++) {
        thankYouMessages = [];
        thankYouMessages.push(console.log(`Thank you, ${stringNames[i]}, for the 
        wonderful ${eventNames} gift!`));
    }
    return thankYouMessages;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday")


function countDown(i){
    while (i > 0) {
        console.log(i);
        i--;

    }
}