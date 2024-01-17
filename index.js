// Calcola la somma
let numero1 = 5;
let numero2 = 10;
let somma = numero1 + numero2;

// Visualizza il risultato nella pagina HTML
document.getElementById("risultato").innerHTML = `La somma di ${numero1} e ${numero2} è: ${somma}`;

// index.js

document.addEventListener('DOMContentLoaded', function () {
    var bottoneIndex = document.getElementById('bottoneIndex');

    bottoneIndex.addEventListener('click', function () {
        window.location.href = '/dashboard.html';
    });
});


