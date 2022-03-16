import express from 'express';
import moment from 'moment';
import fs from 'fs';
const app = express(); //inicializamos express

const PORT = 8080;

const server=app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

/*creamos ENDPOINT*/
let contruta1=0
let contruta2=0
//responde { item: {json de productos}, cantidad: arr.length}
app.get('/items',async (req, res)=>{ //('url'a recibir, callback)
    contruta1++
    let item=await fs.promises.readFile('./files/productos.txt','utf-8')
    let itemfinal=await JSON.parse(item)
    res.send(
       {
            item:itemfinal,
            cantidad:itemfinal.length 
        }
    )
})

//devuele item de un id random
app.get('/itemrandom',async (req, res)=>{ //('url'a recibir, callback)
    contruta2++
    let item=await fs.promises.readFile('./files/productos.txt','utf-8')
    let itemfinal=await JSON.parse(item)
    res.send(
        {
            item:itemfinal[Math.floor(Math.random()*(itemfinal.length))]
        }
    )
})

//devuelve--> {visitas: {items: cantidad, item: cantidad}} es decir items=contruta1 item=contruta2
app.get('/visitas',(req, res)=>{ //('url'a recibir, callback)
    res.status(200).send({
        visitas: {items: contruta1, item: contruta2}
    })
})
