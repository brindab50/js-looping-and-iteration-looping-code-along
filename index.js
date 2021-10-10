// Code your solutions in this file

function writeCards(names, events){
    let cards = [] // empty array to store new thank you cards to return the array
    for (let i = 0; i < names.length; i ++ ){ // start at 0 | go through every elemetnt in the names array 
        cards.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`) // 
    }
    return cards
}




function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }