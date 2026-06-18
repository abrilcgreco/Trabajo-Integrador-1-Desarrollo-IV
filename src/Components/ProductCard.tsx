interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen?: string;
}

interface ProductCardProps {
  producto: Producto;
}

function ProductCard({ producto }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={producto.imagen || '/img/producto-sin-imagen.png'}
          alt={producto.nombre}
        />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">
          {producto.categoria}
        </span>

        <h3 className="product-card__title">
          {producto.nombre}
        </h3>

        <p className="product-card__price">
          ${producto.precio.toLocaleString('es-AR')}
        </p>

        <p className="product-card__stock">
          Stock disponible: {producto.stock}
        </p>

        <button className="product-card__button">
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

export default ProductCard;