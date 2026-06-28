import { productos } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <section>
      <h2>Productos</h2>
      <div className="product-list">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}