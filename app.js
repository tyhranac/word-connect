// get table element
const htmlTable = document.querySelector('main > table');

// convert html collection to array
const tableRows = Array.from(htmlTable.rows);

// set up js table object
let jsTable = Array();

for (let i=0; i<tableRows.length; i++) {
    let tableRow = Array.from(tableRows[i].children);
    for (let i=0; i<tableRow.length; i++) {
        tableRow[i].innerText = 'a';
    }
    jsTable.push(tableRow);
}

console.log(jsTable);