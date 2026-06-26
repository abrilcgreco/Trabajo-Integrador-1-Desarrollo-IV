// CreateContext: contexto para el carrito. UseContext en componentes que lo necesiten.
import { useState, createContext, useContext} from 'react'
import type { Product } from '../Data/Products'


// Tipado del contexto
interface CarritoItem extends Product {
 quantity: number
}


//Genero una interface del carrito para tipar el contexto, con las funciones que va a tener el carrito y el estado del mismo
interface CarritoContextType {
 carrito: CarritoItem[]
 addToCart: (product: Product, quantity: number) => void
 removeItem: (id: number) => void
 emptyCart: () => void
 getItemQuantity: () => number
 getTotalPrice: () => number
}


const CartContext = createContext<CarritoContextType | undefined>(undefined)


// Hook para utilizar el carrito
export const useCart = (): CarritoContextType => {
 const context = useContext(CartContext)
 if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
 return context
}


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
 // Estado del carrito
 const [carrito, setCarrito] = useState<CarritoItem[]>([])


 // Verifica si un producto ya está en el carrito
 const isInCart = (id: number): boolean => carrito.some(p => p.id === id)


 // Agrega o actualiza la cantidad de un producto en el carrito
 const addToCart = (product: Product, quantity: number): void => {
   if (quantity > product.stock) {    // Validación de stock primero
       return console.warn('No hay stock suficiente')
   }


   const idProd = carrito.findIndex(p => p.id === product.id) // Busca el índice del producto


   if (isInCart(product.id)) {        // Si ya está en carrito, actualizo la cantidad
       const aux = [...carrito]
       aux[idProd] = { ...aux[idProd], quantity }
       setCarrito(aux)
   } else {                           // Si no está, lo agrego con el operador spread
       setCarrito(aux => [...aux, { ...product, quantity }])
   }
}


 // Elimina un producto del carrito por id
 const removeItem = (id: number): void => setCarrito(aux => aux.filter(p => p.id !== id))


 // Vacía el carrito
 const emptyCart = (): void => setCarrito([])


 // Suma la cantidad de todos los productos en el carrito
 const getItemQuantity = (): number => carrito.reduce((acum, p) => acum + p.quantity, 0)


 // Suma el precio total de todos los productos en el carrito
 const getTotalPrice = (): number => carrito.reduce((acum, p) => acum + p.precio * p.quantity, 0)


 return (
   <CartContext.Provider value={{ carrito, addToCart, removeItem, emptyCart, getItemQuantity, getTotalPrice }}>
     {children}
   </CartContext.Provider>
 )
}
