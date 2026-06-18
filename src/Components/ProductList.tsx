import ProductCard from './ProductCard';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen?: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Botines adidas Predator League FG',
    precio: 120000,
    stock: 50,
    categoria: 'Calzado',
    imagen: '/img/botines-adidas-predator-league-fg.jpg',
  },
  {
    id: 2,
    nombre: 'Botines Nike Mercurial Vapor 15 Academy FG/MG',
    precio: 135000,
    stock: 45,
    categoria: 'Calzado',
    imagen: '/img/botines-nike-mercurial-vapor-15-academy-fg-mg.jpg',
  },
  {
    id: 3,
    nombre: 'Botines Puma Future 7 Play FG/AG',
    precio: 98000,
    stock: 40,
    categoria: 'Calzado',
    imagen: '/img/botines-puma-future-7-play-fg-ag.jpg',
  },
  {
    id: 4,
    nombre: 'Camiseta adidas Selección Argentina 2026 Titular Hombre',
    precio: 149999,
    stock: 32,
    categoria: 'Camisetas',
    imagen: '/img/camiseta-adidas-seleccion-argentina-2026-titular-hombre.jpg',
  },
  {
    id: 5,
    nombre: 'Camiseta Nike Boca Juniors 2025 Titular Hombre',
    precio: 139999,
    stock: 35,
    categoria: 'Camisetas',
    imagen: '/img/camiseta-nike-boca-juniors-2025-titular-hombre.jpg',
  },
  {
    id: 6,
    nombre: 'Short adidas Selección Argentina 2026 Titular Hombre',
    precio: 74999,
    stock: 38,
    categoria: 'Shorts',
    imagen: '/img/short-adidas-seleccion-argentina-2026-titular-hombre.jpg',
  },
  {
    id: 7,
    nombre: 'Short Nike Dri-FIT Academy Hombre',
    precio: 59999,
    stock: 42,
    categoria: 'Shorts',
    imagen: '/img/short-nike-dri-fit-academy-hombre.jpg',
  },
  {
    id: 8,
    nombre: 'Guantes de Arquero Reusch Attrakt Starter Solid',
    precio: 69999,
    stock: 25,
    categoria: 'Guantes',
    imagen: '/img/guantes-de-arquero-reusch-attrakt-starter-solid.jpg',
  },
  {
    id: 9,
    nombre: 'Medias adidas Milano 23 Fútbol',
    precio: 24999,
    stock: 60,
    categoria: 'Medias',
    imagen: '/img/medias-adidas-milano-23-futbol.jpg',
  },
  {
    id: 10,
    nombre: 'Canilleras Nike Charge Football Shin Guards',
    precio: 34999,
    stock: 30,
    categoria: 'Canilleras',
    imagen: '/img/canilleras-nike-charge-football-shin-guards.jpg',
  },
];

function ProductList() {
  return (
    <section className="product-list">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </section>
  );
}

export default ProductList;