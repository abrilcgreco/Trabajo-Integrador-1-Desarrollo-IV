export interface Product {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen?: string;
}

export const productos: Product[] = [
  {
    id: 1,
    nombre: 'Botines adidas Predator League FG',
    precio: 120000,
    stock: 50,
    categoria: 'Calzado',
    imagen: 'Img.integrador desarrollo IV/Botines adidas Predator League FG.png',
  },
  {
    id: 2,
    nombre: 'Botines Nike Mercurial Vapor 16 Academy FG/MG',
    precio: 135000,
    stock: 45,
    categoria: 'Calzado',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_784250-MLA82862564992_032025-F.webp',
  },
  {
    id: 3,
    nombre: 'Botines Puma Future 7 Play FG/AG',
    precio: 98000,
    stock: 40,
    categoria: 'Calzado',
    imagen: 'Img.integrador desarrollo IV/Botines Puma Future 7 Play FGAG.png',
  },
  {
    id: 4,
    nombre: 'Camiseta adidas Selección Argentina 2026 Titular Hombre',
    precio: 119999,
    stock: 32,
    categoria: 'Camisetas',
    imagen: 'Img.integrador desarrollo IV/Camiseta adidas Selección Argentina 2026 Titular Hombre.png',
  },
  {
    id: 5,
    nombre: 'Camiseta Nike Boca Juniors 2025 Titular Hombre',
    precio: 139999,
    stock: 35,
    categoria: 'Camisetas',
    imagen: 'Img.integrador desarrollo IV/Camiseta Nike Boca Juniors 2025 Titular Hombre.png',
  },
  {
    id: 6,
    nombre: 'Short adidas Selección Argentina 2026 Titular Hombre',
    precio: 74999,
    stock: 38,
    categoria: 'Shorts',
    imagen: 'Img.integrador desarrollo IV/Short adidas Selección Argentina 2026 Titular Hombre.png',
  },
  {
    id: 7,
    nombre: 'Short Nike Dri-FIT Academy Hombre',
    precio: 59999,
    stock: 42,
    categoria: 'Shorts',
    imagen: 'Img.integrador desarrollo IV/Short Nike Dri-FIT Academy Hombre.png',
  },
  {
    id: 8,
    nombre: 'Guantes de Arquero Reusch Attrakt Starter Solid',
    precio: 69999,
    stock: 25,
    categoria: 'Guantes',
    imagen: 'Img.integrador desarrollo IV/Guantes de Arquero Reusch Attrakt Starter Solid.png',
  },
  {
    id: 9,
    nombre: 'Medias adidas Milano 23 Fútbol',
    precio: 24999,
    stock: 60,
    categoria: 'Medias',
    imagen: 'Img.integrador desarrollo IV/Medias adidas Milano 23 Fútbol.png',
  },
  {
    id: 10,
    nombre: 'Canilleras Nike Charge Football Shin Guards',
    precio: 34999,
    stock: 30,
    categoria: 'Canilleras',
    imagen: 'Img.integrador desarrollo IV/Canilleras Nike Charge Football Shin Guards.png',
  },
];