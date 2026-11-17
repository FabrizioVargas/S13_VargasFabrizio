import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/inicio/inicio').then(m => m.InicioComponent) },
  { path: 'productos', loadComponent: () => import('./pages/productos/productos').then(m => m.ProductosComponent) },
  { path: 'categorias', loadComponent: () => import('./pages/categorias/categorias').then(m => m.CategoriasComponent) },
  { path: 'inventario', loadComponent: () => import('./pages/inventario/inventario').then(m => m.InventarioComponent) },
  { path: '**', loadComponent: () => import('./pages/no-encontrado/no-encontrado').then(m => m.NoEncontradoComponent) }
];
