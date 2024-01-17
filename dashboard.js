document.addEventListener('DOMContentLoaded', function () {
    // Trova i bottoni
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');

    // Aggiungi gestori di eventi ai bottoni
    button1.addEventListener('click', function () {
        alert('Hai cliccato su Bottone 1');
        // Puoi aggiungere qui la logica che desideri eseguire per il Bottone 1
    });

    button2.addEventListener('click', function () {
        alert('Hai cliccato su Bottone 2');
        // Puoi aggiungere qui la logica che desideri eseguire per il Bottone 2
    });

    button3.addEventListener('click', function () {
        alert('Hai cliccato su Bottone 3');
        // Puoi aggiungere qui la logica che desideri eseguire per il Bottone 3
    });

    button4.addEventListener('click', function () {
        alert('Hai cliccato su Bottone 4');
        // Puoi aggiungere qui la logica che desideri eseguire per il Bottone 4
    });
});
