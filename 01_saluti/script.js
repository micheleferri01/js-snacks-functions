/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Saluta l'utente
 * @param {string} name nome dell'utente
 * @returns {string} saluto con il nome dell'utente
 */
const greet = (name) => `Ciao ${name}`

// Invoca la funzione qui e stampa il risultato in console
greet(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
