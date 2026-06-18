interface Producto {
id: number;
nombre: string;
precio: number;
stock: number;
categoria: string;
}


const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Botines adidas Predator League FG',
    precio: 120000,
    stock: 50,
    categoria: 'Calzado'
  },
  {
    id: 2,
    nombre: 'Botines Nike Mercurial Vapor 15 Academy FG/MG',
    precio: 135000,
    stock: 45,
    categoria: 'Calzado'
  },
  {
    id: 3,
    nombre: 'Botines Puma Future 7 Play FG/AG',
    precio: 98000,
    stock: 40,
    categoria: 'Calzado'
  },
  {
    id: 4,
    nombre: 'Camiseta adidas Selección Argentina 2026 Titular Hombre',
    precio: 149999,
    stock: 32,
    categoria: 'Camisetas'
  },
  {
    id: 5,
    nombre: 'Camiseta Nike Boca Juniors 2025 Titular Hombre',
    precio: 139999,
    stock: 35,
    categoria: 'Camisetas'
  },
  {
    id: 6,
    nombre: 'Short adidas Selección Argentina 2026 Titular Hombre',
    precio: 74999,
    stock: 38,
    categoria: 'Shorts'
  },
  {
    id: 7,
    nombre: 'Short Nike Dri-FIT Academy Hombre',
    precio: 59999,
    stock: 42,
    categoria: 'Shorts'
  },
  {
    id: 8,
    nombre: 'Guantes de Arquero Reusch Attrakt Starter Solid',
    precio: 69999,
    stock: 25,
    categoria: 'Guantes'
  },
  {
    id: 9,
    nombre: 'Medias adidas Milano 23 Fútbol',
    precio: 24999,
    stock: 60,
    categoria: 'Medias'
  },
  {
    id: 10,
    nombre: 'Canilleras Nike Charge Football Shin Guards',
    precio: 34999,
    stock: 30,
    categoria: 'Canilleras'
  }
];
