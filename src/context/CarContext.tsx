import { useState, createContext, useContext} from 'react'; /*Importa los hooks useState, createContext y useContext de React, que son fundamentales para manejar el estado y la gestión de contexto en la aplicación, permitiendo crear unto para compartir datos entre componentes sin necesidad de pasar props manualmente a través de cada nivel de la estructura de componentes.*/
const CarContext = createContext([]) 

export const useCartContext = () => useContext(CarContext) /*Crea un hook personalizado llamado useCartContext que utiliza el hook useContext para acceder al contexto del carrito de compras, facilitando el acceso a los datos del carrito desde cualquier componente que lo necesite sin tener que pasar props manualmente.*/

export const CardProvider = (props) => {
    const [cart, setCart] = useState([]) /*Crea un estado local llamado cart utilizando el hook useState, que se inicializa como un array vacío, y una función setCart para actualizar ese estado. Este estado se utilizará para almacenar los productos que el usuario ha agregado al carrito de compras.*/
    const addToCart = ({ product, quantity }) => {
    const IsInCart = cart.find(item => item.product.id === product.id)
        if IsInCart.product.id === product.id {
    }