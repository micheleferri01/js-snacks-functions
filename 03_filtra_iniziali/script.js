/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Ritorna un array con tutti gli elementi che iniziano con la lettera cercata
 * @param {string} letter lettera da cercare
 * @param {object} array array in cui cercare
 * @returns {object} array con tutti gli elementi che inziano con la lettera cercata
 */
function startsWith(letter,array){
    const namesStartingWith = [];
    for(let i = 0; i < array.length; i++){
        const currentElement = array[i];
        if (currentElement.charAt(0) === letter){
            namesStartingWith.push(array[i]);
        }

    }
    return namesStartingWith;
}

// Invoca la funzione qui e stampa il risultato in console
const output = startsWith('A',names);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(output);