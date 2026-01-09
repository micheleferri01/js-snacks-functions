/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * dato un array di elementi ritorna il primo elemento degli elemeti dell'array dato
 * @param {object} array array di elementi
 * @returns {object} array di elementi che contengono il carattere a indice 0 di ogni elemento dell'array dato
 */
function firstLetter(array){
    const firstLetters = [];
    for(let i = 0; i < array.length; i++){
        const currentElement = array[i];
        const wordFirstLetter = currentElement.charAt(0);
        firstLetters.push(wordFirstLetter);
    }
    return firstLetters;
}

// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]