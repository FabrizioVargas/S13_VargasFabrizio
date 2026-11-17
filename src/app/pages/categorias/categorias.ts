import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productos } from '../../data/productos';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class CategoriasComponent {
  categorias = ['Hogar', 'Papelería', 'Accesorios'];

  cantidad(nombre: string): number {
    return productos.filter(producto => producto.categoria === nombre).length;
  }
}
