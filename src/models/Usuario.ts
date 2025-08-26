import { IUsuario } from "../interfaces/IUsuario.js";
import { Material } from "./Material.js";

export class Usuario implements IUsuario {
  id: number;
  nombre: string;
  private materialesPrestados: Material[] = [];
  ultimaPrestacion: Material | null = null;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  prestar(material: Material): void {
    if (material.getDisponibilidad()) {
      material.setDisponibilidad(false);
      this.materialesPrestados.push(material);
      this.ultimaPrestacion = material;
      console.log(`${this.nombre} prestó: ${material.titulo}`);
    } else {
      console.log(`"${material.titulo}" no disponible.`);
    }
  }

  mostrarPrestados(): void {
    if (this.materialesPrestados.length === 0) {
      console.log(`No se prestó a ${this.nombre} .`);
      return;
    }
    console.log(`Materiales prestados por ${this.nombre}:`);
    this.materialesPrestados.forEach((m, i) => {
      console.log(`${i + 1}. ${m.titulo}`);
    });
  }

  mostrarUltimaPrestacion(): void {
    if (this.ultimaPrestacion === null)  {
      console.log(`${this.nombre} no ha prestado ningún material todavía.`);
    } else {
      console.log(
        `Última prestación de ${this.nombre}: ${this.ultimaPrestacion.titulo}`
      );
    }
  }
}
