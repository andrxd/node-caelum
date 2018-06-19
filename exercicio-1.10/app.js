const express = require('express')
const port = 3000

const server = express()

//Next sempre vai passar por aqui antes de ir para  rota
// é bom pra fazer um log 
// ou um 404
server.use((req,res,next) =>{
    console.log(req.url)
    next()
})

server.get('/', (req, res) => {
    console.log('Recebeu requisção em Home')
    res.send('<h1>Home</h1>')
})
server.get('/produtos', (req, res) => {    
    console.log('Recebeu requisção em Produtos')
    res.send('<h1>Produtos</h1>')
})
server.listen(port,() =>{
    console.log(`servidor de pé http://localhost:${port}`)
})

//ISso aqui vai pegar as paginas que não existem
server.use((req,res) =>{
    res.send('404 non ecxiste')
    console.log(req.url)
})