var http = require('http');
var porta = 3000;
//var ip = 'localhost';
var ip = '172.23.161.129';

http.createServer(function (req, res) {
    console.log('Recebendo request');
    res.end('Boa noite');
}).listen(porta,ip);

console.log(`Servidor executando em http://${ip}:${porta}`);