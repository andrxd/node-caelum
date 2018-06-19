var http = require('http');
var porta = 3000;
var ip = 'localhost';

http.createServer(function (req, res) {
    console.log('Recebendo request');
    res.end();
}).listen(porta,ip);

console.log(`Servidor executando em http://${ip}:${porta}`);