import React, { useState, createContext } from "react";

export const CartContext = createContext([]);

export function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        const existingItem = cartItems.find((i) => i.id === item.id);
        if (existingItem) {
            const updatedCartItems = cartItems.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const handleDeleteItem = (id) => {
        const updatedCartItems = cartItems.filter((i) => i.id !== id);
        setCartItems(updatedCartItems);
    };

    const handleQuantityChange = (quantity, id) => {
        const updatedCartItems = cartItems.map((i) =>
            i.id === id ? { ...i, quantity: Number(quantity) } : i
        );
        setCartItems(updatedCartItems);
    };

    const cartTotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                handleAddToCart,
                handleDeleteItem,
                handleQuantityChange,
                cartTotal,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;
