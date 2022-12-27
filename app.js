// get table element
const htmlTable = document.querySelector('main > table');
// get words list
const htmlWordList1 = document.querySelector('.wl-first-half');
const htmlWordList2 = document.querySelector('.wl-second-half');

// define words
const words = ['noel', 'merry', 'cheer', 'mistletoe', 'holly', 'santa', 'gifts',
                'tree', 'wreath', 'candle', 'carol', 'elf', 'candycane'];

// convert html collection to array
const tableRows = Array.from(htmlTable.rows);

// populate table
let jsTable = Array();

for (let ir=0; ir<tableRows.length; ir++) {
    let tableRow = Array.from(tableRows[ir].children);
    for (let ic=0; ic<tableRow.length; ic++) {
        if (typeof words[ir][ic] !== 'undefined') {
            tableRow[ic].innerText = words[ir][ic];
        } else {
            tableRow[ic].innerText = 'x';
        }
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(words[ir]));

    if (ir < 7) {
        htmlWordList1.appendChild(li);
    } else {
        htmlWordList2.appendChild(li);
    }
    jsTable.push(tableRow);
}

console.log(jsTable);