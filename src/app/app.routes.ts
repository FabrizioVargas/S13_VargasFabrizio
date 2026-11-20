import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: '', canActivate: [authGuard], loadComponent: () => import('./pages/inicio/inicio').then(m => m.InicioComponent) },
  { path: 'productos', canActivate: [authGuard], loadComponent: () => import('./pages/productos/productos').then(m => m.ProductosComponent) },
  { path: 'categorias', canActivate: [authGuard], loadComponent: () => import('./pages/categorias/categorias').then(m => m.CategoriasComponent) },
  { path: 'inventario', canActivate: [authGuard], loadComponent: () => import('./pages/inventario/inventario').then(m => m.InventarioComponent) },
  { path: '**', loadComponent: () => import('./pages/no-encontrado/no-encontrado').then(m => m.NoEncontradoComponent) }
];
