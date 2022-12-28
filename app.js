// get table element
const htmlTable = document.querySelector('main > table');
// get words list
const htmlWordList1 = document.querySelector('.wl-first-half');
const htmlWordList2 = document.querySelector('.wl-second-half');

// define words
const words = ['noel', 'merry', 'cheer', 'mistletoe', 'holly', 'santa', 'gifts',
                'tree', 'wreath', 'candle', 'carol', 'elf', 'candycane'];
// define alphabet
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
                    'y', 'z']

// convert html collection to array
const tableRows = Array.from(htmlTable.rows);

for (let ir=0; ir<tableRows.length; ir++) {
    let tableRow = Array.from(tableRows[ir].children);
    for (let ic=0; ic<tableRow.length; ic++) {
        tableRow[ic].addEventListener('click', () => {
            tableRow[ic].classList.toggle('letter-selected')
        })
        tableRow[ic].innerText = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(words[ir]));
    li.addEventListener('click', () => {
        li.classList.toggle('word-crossed')
    })

    if (ir < 7) {
        htmlWordList1.appendChild(li);
    } else {
        htmlWordList2.appendChild(li);
    }
}


const checkPlace = (wordLength, x, y, direction) => {
    let canPlace = true;

    for (let pi=0; pi<wordLength; pi++) {
        switch (direction) {
            case 'up':
                if (placedWords.has([y-pi, x].toString())) {
                    canPlace = false;
                }
                break;
            case 'right':
                if (placedWords.has([y, x+pi].toString())) {
                    canPlace = false;
                }
                break;
            case 'down':
                if (placedWords.has([y+pi, x].toString())) {
                    canPlace = false;
                }
                break;
            case 'left':
                if (placedWords.has([y, x-pi].toString())) {
                    canPlace = false;
                }
                break;
        }
    }
    return canPlace;
}


const placeWord = (word, index) => {
    let wordLength = word.length;
    let x = index[1];
    let y = index[0];
    // check up
    if ((wordLength <= y) && checkPlace(wordLength, x, y, 'up')) {
        console.log(checkPlace(wordLength, x, y, 'up'));
        for (let i=0; i<wordLength; i++) {
            Array.from(tableRows[y-i].children)[x].innerText = word[i];
            placedWords.add([y-i, x].toString());
        }
        return true;
    }
    // check right
    else if ((wordLength <= (icmax - x)) && checkPlace(wordLength, x, y, 'right')) {
        console.log(checkPlace(wordLength, x, y, 'right'));
        for (let i=0; i<wordLength; i++) {
            Array.from(tableRows[y].children)[x+i].innerText = word[i];
            placedWords.add([y, x+i].toString());
        }
        return true;
    }
    // check down
    else if ((wordLength <= (irmax - y)) && checkPlace(wordLength, x, y, 'down')) {
        console.log(checkPlace(wordLength, x, y, 'down'));
        for (let i=0; i<wordLength; i++) {
            Array.from(tableRows[y+i].children)[x].innerText = word[i];
            placedWords.add([y+i, x].toString());
        }
        return true;
    }
    // check left
    else if ((wordLength <= x) && checkPlace(wordLength, x, y, 'left')) {
        console.log(checkPlace(wordLength, x, y, 'left'));
        for (i=0; i<wordLength; i++) {
            Array.from(tableRows[y].children)[x-i].innerText = word[i];
            placedWords.add([y, x-i].toString());
        }
        return true;
    }
    // could not place
    else {
        return false;
    }
}


const placeWords = (wordsList) => {
    for (let wi=0; wi<wordsList.length; wi++) {
        let placed = false;
        
        while (!placed) {
            let index = [Math.floor(Math.random() * irmax), Math.floor(Math.random() * icmax)];
            console.log(index);
            placed = placeWord(wordsList[wi], index);
        }
    }
}


const irmax = tableRows.length;
console.log(irmax);
const icmax = tableRows[0].children.length;
console.log(icmax);
let placedWords = new Set();

placeWords(words);