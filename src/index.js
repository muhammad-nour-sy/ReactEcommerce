import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { CategoriesProvider } from "./useCategories";
import { CartProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CategoriesProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </CategoriesProvider>
);
