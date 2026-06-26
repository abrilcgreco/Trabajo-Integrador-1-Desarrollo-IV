import { productos } from '../Data/Products';

export default function ProductList() {
  return (
    <section>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </section>
  );
}
