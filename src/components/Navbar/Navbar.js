import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import { CartContext } from "../../CartContext";


const Navbar = () => {
    const {
        cartItems,
        handleAddToCart,
        handleDeleteItem,
        handleQuantityChange,
        cartTotal,
    } = useContext(CartContext);
    const [clicked, setClicked] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleCliclcked = () => setClicked(!clicked);
    const closeMobileMenu = () => setClicked(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) setDropdown(false);
        else setDropdown(true);
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) setDropdown(false);
        else setDropdown(false);
    };
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    My Store
                </Link>
                <div className="menu-icon" onClick={handleCliclcked}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/allproducts"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            All Products
                        </Link>
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Categories <i className="fas fa-caret-down"></i>
                            {dropdown && <Dropdown />}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/cart"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            
                            <div class="cart-icon">
                            <span>Cart </span>
                                <i class="fas fa-shopping-cart"></i>
                                {
                                    cartItems.length!=0 && <span id="cart-count">{cartItems.length}</span>
                                }
                               
                            </div>
                        </Link>
                    </li>
                    <li className="nav-links-mobile">
                        <Link
                            to="/signup"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    );
};

export default Navbar;
