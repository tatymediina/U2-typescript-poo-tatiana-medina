import { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";
abstract class Material implements IBibliotecaItem {
  readonly id: number;
  titulo: string;
  autor: string;

  
  protected disponible: boolean;

  constructor(id: number, titulo: string, autor: string, disponible: boolean = true) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = disponible;
  }

 
  getDisponibilidad(): boolean {
    return this.disponible;
  }

  setDisponibilidad(valor: boolean): void {
    this.disponible = valor;
  }

    abstract mostrarInfo(): void;
}

export { Material };