import { Component } from '@angular/core';
import { productos } from '../../data/productos';
@Component({ selector: 'app-inventario', standalone: true, templateUrl: './inventario.html', styleUrl: './inventario.css' })
export class InventarioComponent {
  productos = productos;
  get unidades(): number { return productos.reduce((suma, producto) => suma + producto.stock, 0); }
  get pocos(): number { return productos.filter(producto => producto.stock < 5).length; }
}
