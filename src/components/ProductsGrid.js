import "../styles/ProductGrid.css";

import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products, title }) => {
    return (
        <div className="product-grid">
            
                {products.map((item, i) => (
                    <ProductCard key={i} product={item} />
                ))}
            
        </div>
    );
};

export default ProductsGrid;
