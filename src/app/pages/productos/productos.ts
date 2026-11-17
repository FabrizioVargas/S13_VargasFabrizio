import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productos } from '../../data/productos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  productos = productos;
  categoriaActiva = '';

  constructor(route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      this.categoriaActiva = params.get('categoria') ?? '';
    });
  }

  get productosVisibles() {
    return this.categoriaActiva
      ? this.productos.filter(producto => producto.categoria === this.categoriaActiva)
      : this.productos;
  }
}
