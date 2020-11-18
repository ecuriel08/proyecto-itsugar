export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenurl: string;

    constructor(id: number, nombre: string, descripcion: string, precio: number, imagenurl: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagenurl = imagenurl;
    }
}
