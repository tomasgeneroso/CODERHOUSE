/*agregar y listar un array--> 
[
    {
        title:nombreproducto,
        price:precioproducto,
        thumbnail:urlprod
    },
]
*/
import express from 'express';
import { idGen } from './idGen.js';
const app = express();
const port = 8080
const server=app.listen(port,()=>{console.log('listening on port '+port)})
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
let arr=[]

//muestra todos los productos
app.get('/api/productos/lista',(req,res)=>{
    if(arr.length==0) res.end('{error:"no hay productos cargados"}')
    res.end(JSON.stringify(arr))
})

//muestra un producto puntual
app.get('/api/productos/lista/:id',(req,res)=>{
    let prod=req.params.id
    if(arr.length==0) res.end('{error:"no hay productos cargados"}')
    if(prod>arr.length) res.end('{error:"no existe este producto"}')
    res.end(JSON.stringify(arr[prod]))
})

//guarda producto
app.post('/api/productos/listanueva',async (req,res)=>{
    let objetoAVerificar=req.body
    // controla que no mandes objeto vacio
    if(Object.entries(objetoAVerificar).length === 0){res.end('{error:"no podes mandar vacio"}') 
    }else{
    let productos =req.body 
    productos.id=idGen.next().value
    arr=arr.concat(productos)
    console.log(arr)
    res.end(JSON.stringify(arr))   
    }
})
