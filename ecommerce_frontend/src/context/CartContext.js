import React, {createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children}) {
const [cart, setCart] = useState([]);

const addToCart = (product, quantity) => {
setCart([...cart, { ...product, quantity }]);
};

const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !==id));
};
return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
    {children}
    </CartContext.Provider>
);
}