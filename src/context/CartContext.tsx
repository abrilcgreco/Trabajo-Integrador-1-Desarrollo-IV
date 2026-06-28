import { useState, createContext, useContext } from 'react';
import type { Product } from '../data/products';

// Un item del carrito es un Product + cuántas unidades tiene (quantity)
interface CarritoItem extends Product {
  quantity: number;
}

// Esta interface describe TODO lo que el context va a exponer:
// el array del carrito + las funciones para manipularlo
interface CarritoContextType {
  carrito: CarritoItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeItem: (id: number) => void;
  emptyCart: () => void;
  getItemQuantity: () => number;
  getTotalPrice: () => number;
}

// Creamos el context. Arranca en undefined para obligar a usarlo dentro del Provider.
const CartContext = createContext<CarritoContextType | undefined>(undefined);

// Hook personalizado: cualquier componente llama useCart() para usar el carrito.
export const useCart = (): CarritoContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider');
  return context;
};

// El Provider: envuelve la app y maneja el estado real del carrito.
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Estado: el array de items del carrito. Arranca vacío.
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  // Devuelve true si el producto (por id) ya está en el carrito
  const isInCart = (id: number): boolean => carrito.some((p) => p.id === id);

  // Agrega un producto, o le suma cantidad si ya estaba
  const addToCart = (product: Product, quantity: number): void => {
    if (quantity > product.stock) {
      return console.warn('No hay stock suficiente');
    }

    const idProd = carrito.findIndex((p) => p.id === product.id);

    if (isInCart(product.id)) {
      const aux = [...carrito];
      aux[idProd] = { ...aux[idProd], quantity };
      setCarrito(aux);
    } else {
      setCarrito((aux) => [...aux, { ...product, quantity }]);
    }
  };

  // Saca un producto del carrito filtrando por id
  const removeItem = (id: number): void =>
    setCarrito((aux) => aux.filter((p) => p.id !== id));

  // Vacía el carrito completo
  const emptyCart = (): void => setCarrito([]);

  // Suma TODAS las unidades del carrito
  const getItemQuantity = (): number =>
    carrito.reduce((acum, p) => acum + p.quantity, 0);

  // Suma el precio total (precio × cantidad de cada item)
  const getTotalPrice = (): number =>
    carrito.reduce((acum, p) => acum + p.precio * p.quantity, 0);

  return (
    <CartContext.Provider
      value={{ carrito, addToCart, removeItem, emptyCart, getItemQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};