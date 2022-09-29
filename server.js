
const express = require ("express")
const app = express()

const Contenedor = require ("./claseContendora")
let contenedor = new Contenedor()

const { Router } = require (`express`)
const routerProduct = Router()
routerProduct.use(express.json())
routerProduct.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", routerProduct)
app.use(express.static(`public`))

//-------------------------------------------

routerProduct.get("/productos", (req, res)=>{
    res.json(contenedor.getAllProducts())
})


routerProduct.get("/productos/:id", (req, res)=>{
    let id = Number(req.params.id)
    res.json(contenedor.getProductById(id))
})


routerProduct.post("/productos", (req, res)=>{
    const producto = req.body
    res.json(contenedor.agregarProducto(producto))
})


routerProduct.put("/productos/:id", (req, res)=>{
    let numeroId = Number(req.params.id)
    let productoId = req.body
    res.json(contenedor.actualizarProducto(numeroId, productoId))
})


routerProduct.delete("/productos/:id", (req, res)=>{
    let numero = Number(req.params.id)
    res.json(contenedor.deleteById(numero))
})


//-------------------------------------------

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor esuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))