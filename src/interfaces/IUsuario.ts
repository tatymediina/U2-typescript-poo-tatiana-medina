import { Material } from "../models/Material.js";

interface IUsuario {
    id: number,
    nombre: string,
    prestar(material: Material): void
}

export type { IUsuario };