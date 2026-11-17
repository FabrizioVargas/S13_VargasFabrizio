export interface Producto { nombre: string; categoria: string; precio: number; stock: number; iniciales: string; color: string; }
export const productos: Producto[] = [
  { nombre: 'Botella reutilizable', categoria: 'Hogar', precio: 24.9, stock: 18, iniciales: 'BR', color: 'blue' },
  { nombre: 'Cuaderno rayado', categoria: 'Papelería', precio: 8.5, stock: 32, iniciales: 'CR', color: 'orange' },
  { nombre: 'Taza de cerámica', categoria: 'Hogar', precio: 19.9, stock: 4, iniciales: 'TC', color: 'pink' },
  { nombre: 'Audífonos básicos', categoria: 'Accesorios', precio: 39.9, stock: 12, iniciales: 'AB', color: 'purple' },
  { nombre: 'Bolsa de tela', categoria: 'Accesorios', precio: 12, stock: 2, iniciales: 'BT', color: 'green' },
  { nombre: 'Lapiceros (pack x3)', categoria: 'Papelería', precio: 5.5, stock: 25, iniciales: 'LP', color: 'yellow' }
];
