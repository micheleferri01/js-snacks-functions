/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * restituisce un array con tutte le vocali della parola data
 * @param {string} word parola da controllare
 * @returns {object} array con tutte le vocali nella parola
 */
function vocalsInString(word){
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    const vocalsinWord = [];
    for(let i = 0; i < word.length; i++){
        const currentChar = word[i];
        for(let i = 0; i < vocals.length; i++){
            if (currentChar === vocals[i]){
                vocalsinWord.push(currentChar);
            }
        }
    }
    return vocalsinWord;
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)