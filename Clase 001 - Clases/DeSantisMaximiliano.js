'use strict';

class Usuario {
    constructor(nombre,apellido,mascotas,libros) {
        this.nombre = String(nombre),
        this.apellido = String(apellido),
        this.mascotas = [...mascotas],
        this.libros = [...libros] 
    }
    getFullName = () => (`${this.nombre} ${this.apellido}`)

    addMascotas = (mascota) => {this.mascotas.push(mascota)}

    countMascotas = () => this.mascotas.length

    addBook = (nombre,autor) => {this.libros.push({"nombre": nombre, "autor": autor})}
    
    getBooksNames = () => this.libros.map(libros => libros.nombre)
}

const user = new Usuario('Maximiliano','De Santis',["Perro","Gato"],[{nombre:"La espada del destino",autor:"Andrzej Sapkowski"},{nombre:"Estudio en escarlata",autor:"Arthur Conan Doyle"}])
const user2 = new Usuario('Maximiliano','De Santis',["Perro"],[{nombre:"La espada del destino",autor:"Andrzej Sapkowski"},{nombre:"Estudio en escarlata",autor:"Arthur Conan Doyle"}])


console.log(`\nNombre Completo: ${user.getFullName()}`) // Mostrar nombre completo

user.addMascotas('Conejo') // Agregar mascota

console.log(`\nMascotas en total: ${user.countMascotas()}`) // Mostrar cantidad de mascotas

user.addBook('Harry Potter y la piedra filosofal','J. K. Rowling') // Agregar libro

console.log('\nLista de libros: ' ) 
console.log(user.getBooksNames()) // Mostrar el nombre de los libros agregados

