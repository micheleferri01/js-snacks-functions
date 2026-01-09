/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * genera un messaggio di saluto diverso in base all'ora attuale
 * @param {string} name nome di chi salutare
 * @returns {string} saluto
 */
function greet(name){
    // variabile dove salvare l'orario
    const hour = new Date().getHours();
    // "Jenuary 09, 2026 18:15:00" copiare all'interno delle parentesi di new Date per testare se funziona con orari diversi

    // viaribile dove salvare il messaggio
    let message = "";
    if (hour < 13){
        message = `Buongiorno ${name}`;
    } 
    else if (hour < 17) {
        message = `Buon pomeriggio ${name}`;

    }
    else {
        message = `Buonasera ${name}`;
    }
    return message
}

// Invoca la funzione qui e stampa il risultato in console

const output = greet(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

console.log(output);