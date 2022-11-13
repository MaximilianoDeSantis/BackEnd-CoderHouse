const fs = require('fs');  /**  */



class Contenedor {
    constructor (fileName) {
        this.file = fileName;
    }

    async save(newProduct) {
        const products = await this.getAll(); // Obtener todos los productos del archivo
        newProduct.id = this.#createID(products);
        products.push(newProduct); // Agregar al array el producto nuevo

        try{
            await fs.promises.writeFile(`${this.file}`, JSON.stringify(products,0,2));
            return `Objeto cargado correctamente. Numero de ID: ${newProduct.id}`
        }
        catch(error) {
            console.log(error)
        }
    }

    async getById(id) {
        const products = await this.getAll(); // Obtener todos los productos del archivo
        return products.find(product => product.id === id)
    }

    async getAll(){
        try {
            const fileItems = await fs.promises.readFile(`${this.file}`, 'utf-8');
            const items = JSON.parse(fileItems);
            return items
        }
        catch (error) {
            // Generar LOG de errror.
            return [];
        }
    }
    

    async deleteById(id) {
        const products = await this.getAll();
        const newProducts = products.filter(e => e.id !== id)
        try {
            await fs.promises.writeFile(`${this.file}`, JSON.stringify(newProducts,0,2));
        }
        catch(error) {
            console.log(error)
        }

    }

    async deleteAll(){
        await fs.promises.writeFile(`${this.file}`, JSON.stringify([]));
    }


    #createID(products) {
        if (!products.length) return 1; // Si el archivo esta vacio genera el primer ID
        return products[products.length - 1].id + 1 // ID siempre uno mas que el ultimo ID registrado
    }
    


}
const products = new Contenedor ('./products.txt');

const producto = {
    name: "REMERA HANG LOOSE SHASTA NEGRA",
    price: 6500,
    URL: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-hang-loose-shasta-negra-208020008050003-1.jpg"    
  };



//    products.getAll().then(res => console.log(res)); // Obtener todos los productos

//    products.save(producto).then((res) => console.log(res)); // Guardar producto nuevo

//    products.getById(4).then(res => console.log(res)) // Buscar por ID

//    products.deleteById(1) // Borrar por ID

    products.deleteAll();   // Borrar TODO