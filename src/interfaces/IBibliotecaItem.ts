interface IBibliotecaItem {
    readonly id: number,
    titulo: string,
    autor: string,
    mostrarInfo(): void
}
export type { IBibliotecaItem }