import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../styles/Cart.css";

const Cart = () => {
    const {
        cartItems,
        handleAddToCart,
        handleDeleteItem,
        handleQuantityChange,
        cartTotal,
    } = useContext(CartContext);
    return (
        <div>
            <div className="shopping-cart">
                <div className="title">Cart</div>
                {(cartItems.length==0)&&
                    <div className="item">
                        <div className="empty">Your Cart is Empty</div>
                    </div>
                }
                {cartItems &&
                    cartItems.map((item, i) => (
                        <div>
                            <div className="item">
                                <div className="cart-buttons">
                                    <button
                                        onClick={() =>
                                            handleDeleteItem(item.id)
                                        }
                                        className="delete-cart-btn"
                                    >
                                        <i class="fa-solid fa-x"></i>
                                    </button>
                                </div>

                                <div className="image-container">
                                    <img
                                        className="image"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="description">
                                    <span>{item.title}</span>
                                </div>

                                <div className="quantity">
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(
                                                item.quantity + 1,
                                                item.id
                                            )
                                        }
                                        className="plus-cart-btn"
                                        type="button"
                                    >
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                    <input
                                        type="text"
                                        name="number"
                                        onChange={(e) =>
                                            handleQuantityChange(
                                                +e.target.value,
                                                item.id
                                            )
                                        }
                                        value={item.quantity}
                                    />
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(
                                                item.quantity - 1,
                                                item.id
                                            )
                                        }
                                        className="minus-cart-btn"
                                        type="button"
                                    >
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                </div>

                                <div className="total-price">
                                    ${item.quantity * item.price}
                                </div>
                            </div>
                        </div>
                    ))}
                {cartTotal != 0 && (
                    <div>
                        <div className="item">
                            <div className="cart-buttons hidden">
                                <button className="delete-cart-btn">
                                    <i class="fa-solid fa-x"></i>
                                </button>
                            </div>

                            <div className="image-container hidden">
                                <img className="image" src="" alt="" />
                            </div>

                            <div className="description hidden">
                                <span></span>
                            </div>

                            <div className="quantity hidden">
                                <button className="plus-cart-btn" type="button">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <input type="text" name="name" />
                                <button
                                    className="minus-cart-btn"
                                    type="button"
                                >
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </div>

                            <div className="cart-total total-price">
                                Total: ${cartTotal}
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
            <button className="btn buy">Buy Now!</button>
        </div>
    );
};
export default Cart;
