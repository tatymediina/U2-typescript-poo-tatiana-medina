import {Material} from "./Material.js"; 

export class Revista extends Material {
  edicion: string;

  constructor(id: number, titulo: string, autor: string, edicion: string) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  mostrarInfo(): void {
    console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edición: ${this.edicion}, Disponible: ${this.disponible}`);
  }
}