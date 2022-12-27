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

// populate table
let jsTable = Array();

for (let ir=0; ir<tableRows.length; ir++) {
    let tableRow = Array.from(tableRows[ir].children);
    for (let ic=0; ic<tableRow.length; ic++) {
        tableRow[ic].addEventListener('click', () => {
            tableRow[ic].classList.toggle('letter-selected')
        })
        if (typeof words[ir][ic] !== 'undefined') {
            tableRow[ic].innerText = words[ir][ic];
        } else {
            tableRow[ic].innerText = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
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
    jsTable.push(tableRow);
}

console.log(jsTable);