import express from 'express'
import { products } from './app.js';

const PORT = process.env.PORT || 8080;

const app = express();



// Gets
app.get('/', (req,res) => {
    res.send(`
        <a href="./productos">Productos</a>
        <br> 
        <a href="./productoRandom">Producto Random</a>`
    )
})

app.get('/productos', (req,res) => {
    products.getAll().then((products) => res.send(products));
})

app.get('/productoRandom', (req,res) => {
    products.getRandom().then((products) => res.send(products));
})







// Escuchar puerto seteado
const connectedServer = app.listen(PORT, ()=> console.log(`Server is UP and RUNNING on http://localhost:${PORT}`));
// Caputra el error y lo muestra
connectedServer.on('error', (error) => {console.log(error)}) 