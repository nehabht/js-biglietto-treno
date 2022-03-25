// chiedere all'utente il numero di chilometri che vuole percorrere

const km_da_fare = parseInt(prompt("quanti chilomentri vuoi fare?"))

// l'età del passeggero

const anni_utente = parseInt(prompt("quanti anni hai?"))

// prezzo del biglietto 0.21 euro per km

const prezzo_biglietto = 0.21 * km_da_fare

const prezzo_normale = prezzo_biglietto


// calcolare prezzo scontato del 20% per i minorenni e 40% per over 

if (anni_utente < 18){
    var prezzo_minorenni = prezzo_biglietto - (prezzo_biglietto * 20 / 100);  
} else if (anni_utente > 65){
    var prezzo_over65 = prezzo_biglietto - (prezzo_biglietto * 40 / 100);
} else {
    
}

// definire e mostrare prezzo minorenni e over65 con 2 cifre decimali

if (prezzo_minorenni){
    // console.log(`Il prezzo del biglietto scontanto per minorenni è ${prezzo_minorenni} €`);
    document.getElementById('prezzo_finale').innerHTML = `Il prezzo del biglietto scontanto per minorenni è ${prezzo_minorenni.toFixed(2)} €`;
} else if (prezzo_over65){
    // console.log(`Il prezzo del biglietto scontato per over 65 è ${prezzo_over65} €`);
    document.getElementById('prezzo_finale').innerHTML = `Il prezzo del biglietto scontanto per over 65 è ${prezzo_over65.toFixed(2)} €`;
} else {
    document.getElementById('prezzo_finale').innerHTML = `Il prezzo del biglietto è ${prezzo_normale.toFixed(2)} €`;
}

