import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../Data/Products';

// Un item del carrito = un producto + la cantidad elegida
export interface CartItem {
  producto: Product;
  cantidad: number;
}

// Forma del context: qué expone hacia los componentes
interface CartContextType {
  items: CartItem[];
  addToCart: (producto: Product, cantidad: number) => void;
  removeFromCart: (productId: number) => void;
  getTotalCart: () => number;
  getItemSubtotal: (productId: number) => number;
  clearCart: () => void;
}

// Creamos el context (arranca undefined para forzar el uso dentro del Provider)
const CartContext = createContext<CartContextType | undefined>(undefined);

// El Provider: envuelve la app y maneja el estado real del carrito
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (producto: Product, cantidad: number) => {
    setItems((prev) => {
      const existente = prev.find((item) => item.producto.id === producto.id);
      if (existente) {
        // Si ya está, le sumo la cantidad
        return prev.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      // Si no está, lo agrego nuevo
      return [...prev, { producto, cantidad }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prev) => prev.filter((item) => item.producto.id !== productId));
  };

  const getItemSubtotal = (productId: number) => {
    const item = items.find((i) => i.producto.id === productId);
    return item ? item.producto.precio * item.cantidad : 0;
  };

  const getTotalCart = () => {
    return items.reduce(
      (total, item) => total + item.producto.precio * item.cantidad,
      0
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        getTotalCart,
        getItemSubtotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook tipado: cualquier componente lo usa con useCart()
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}