import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productos } from '../../data/productos';
@Component({ selector: 'app-inicio', standalone: true, imports: [RouterLink], templateUrl: './inicio.html', styleUrl: './inicio.css' })
export class InicioComponent {
  productos = productos;
  get stockTotal(): number { return this.productos.reduce((total, producto) => total + producto.stock, 0); }
  get stockBajo(): number { return this.productos.filter(producto => producto.stock < 5).length; }
}
