
class Contenedor{
    constructor(){
        this.productos = []
    }

    getAllProducts(){
       return this.productos
    }
    getProductById(id){
        try{
            let productoId = this.getAllProducts().find(numero => numero.id === id)
            
            if(productoId == undefined){
            return ({error: "producto no encontrado"})
            }else{
                return productoId
            }
         
        }
        catch(error){
            return error
        }
       
    }
    agregarProducto(producto){
        try{
            let newId;
            if(this.productos.length > 0){
                newId = this.productos.length + 1
            }else{
                newId = 1
            }
            producto.id = newId;
            this.productos.push(producto)
        }catch(error){
            return error
        }
    }
    actualizarProducto(id, producto){
        try{
            producto.id = id
            this.getAllProducts().splice(id-1,1,producto)
            return this.getProductById(id)
        }catch(error){
            return error
        }
    }
    deleteById(id){
        let product = this.getProductById(id)
        console.log({eliminado: product})
        return this.productos = this.productos.filter(object => object.id !== id)
        
    }
}

module.exports = Contenedor