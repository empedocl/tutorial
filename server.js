const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Ottieni il percorso della richiesta
    const url = req.url;

    // Definisci le risorse disponibili
    const resources = {
        '/': 'index.html',
        '/index.js': 'index.js',
        '/public/robot.png': 'public/robot.png',
        '/dashboard.html': 'dashboard.html',
        '/dashboard.js': 'dashboard.js',
        // Aggiungi altre risorse secondo necessità
    };

    // Verifica se la risorsa richiesta è disponibile
    if (url in resources) {
        serveFile(res, resources[url]);
    } else {
        // Restituisci errore 404 per risorse non gestite
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

function serveFile(res, filePath) {
    const fullPath = path.join(__dirname, filePath);
    
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        // Ottieni il tipo di contenuto in base all'estensione del file
        const contentType = getContentType(filePath);

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

function getContentType(filePath) {
    // Esempio semplice: determina il tipo di contenuto in base all'estensione del file
    const extname = path.extname(filePath).toLowerCase();
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.js':
            return 'text/javascript';
        case '.png':
            return 'image/png';
        // Aggiungi altri tipi di contenuto secondo necessità
        default:
            return 'application/octet-stream';
    }
}

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
