class Usuario{
    constructor(nombre,apellidos){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.libros=[]; //{nombre:asdasa, autor:asasa}
        this.mascotas=[];
    }
    getFullName(){
        console.log(`El nombre completo del usuario es ${this.nombre} ${this.apellidos}`)
    }
    addMascotas(mascotas){
        this.mascotas.push(mascotas)
        console.log("mascotas agregadas ",this.mascotas)
    }
    countMascotas(){
        console.log("Existen ",this.mascotas.length , " mascotas")
    }
    addBook(nombre,autor){
        this.libros.push({"nombre":nombre,"autor":autor})
        console.log("libro agregado ",this.libros.pop()) 
    }
    getBookNames(){
        this.libros.map((nombre)=>{console.log("Los libros existentes son ",nombre.nombre)})
    }
     
}

let usuario1=new Usuario("Elon","Musk");
//Obtener nombres
usuario1.getFullName()

//Agregar Mascotas
usuario1.addMascotas("perro")
usuario1.addMascotas("gato")

//contar mascotas
usuario1.countMascotas()

//agregar libros
usuario1.addBook("El señor de las moscas","William Golding")
usuario1.addBook("Fundacion","Isaac Asimov")
usuario1.getBookNames()