import { Usuario } from './models/Usuario.ts'
import { Revista } from './models/Revista.ts'
import { Libro } from './models/Libro.ts'

const revista1 = new Revista(1, 'Revista 1', 'Maria', 'Edicion 1');
const libro1 = new Libro(2, 'Cabaña', 'Alexis', 156, 'Terror');
const libro2 = new Libro(3, 'Caso 20', 'Karen', 253, 'Misterio');
const usuario1 = new Usuario(3, 'Usuario 1');

console.log(revista1);
console.log(libro1);
console.log(libro2);
usuario1.prestar(libro1);
usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();
console.log(usuario1
);

revista1.mostrarInfo();
libro1.mostrarInfo();
libro2.mostrarInfo();

