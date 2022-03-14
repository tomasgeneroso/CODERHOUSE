const fs=require('fs');

class Archivo {
    constructor(nombrearch){
        this.nombre = nombrearch
    }
    async leer(log) {
        try {
            if (fs.existsSync(`${this.nombre}`)) {
                const lectura = await fs.promises.readFile(`${this.nombre}`, "utf-8");
                const array = await JSON.parse(lectura);
                console.log(array);
                return array;
            }else{
                return [];
            }
        } catch (e) {
            console.log("No se pudo leer: " + e);
        }
    }
    async guardar(nuevoarch){
        try {
            const array = await this.leer();
            nuevoarch.id = array.length+1;
            array.push(nuevoarch);
            await fs.promises.writeFile(`${this.nombre}`,JSON.stringify(array,null,"\t"))
        } catch (e) {
            console.log("No se pudo guardar: " + e);
        }
    }
    async borrar(){
        try {
            await fs.promises.unlink(`${this.nombre}`);
            console.log("Archivo borrado con exito");
        } catch (e) {
            console.log("No se pudo borrar: " + e);
        }
    }
}

let productos = new Archivo("productos.txt");

const guardarProductos = async () =>{
    await productos.guardar({
        title: "Escuadra",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    });
    await productos.guardar({
        title: "Calculadora",
        price: 234.56,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    });
    await productos.guardar({
        title: "Globo Terraqueo",
        price: 345.67,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
    });
}
guardarProductos();

