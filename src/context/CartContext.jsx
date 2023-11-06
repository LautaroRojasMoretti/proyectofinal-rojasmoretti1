import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total: 0 })

    const addToCart = (product) => {
        setCart((prevCart) => ({
            ...prevCart, items: [...prevCart.items, product],
            total: prevCart.total + product.price * product.quantity
        }))
    }

    const removeFromCart = (product) => {
         setCart((prevCart) => ({
             ...prevCart, items: prevCart.items.filter((item)=> item.id !== product.id)
         }))
       
     };

     const clearCart = () => {
        setCart({
            items: [],
            total: 0
        });
    };
    
    
     

return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
        {children}
    </CartContext.Provider>
)


}
export default CartProvider;