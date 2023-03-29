import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
    const {
        cartItems,
        handleAddToCart,
        handleDeleteItem,
        handleQuantityChange,
        cartTotal,
    } = useContext(CartContext);
    function getStars(rating) {
        // Round to nearest half
        rating = Math.round(rating * 2) / 2;
        let output = "";

        // Append all the filled whole stars
        for (var i = rating; i >= 1; i--)
            output +=
                '<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>';

        // If there is a half a star, append it
        if (i == 0.5)
            output +=
                '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>';

        // Fill the empty stars
        for (let i = 5 - rating; i >= 1; i--)
            output +=
                '<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>';

        return output;
    }

    const stars = getStars(product.rating.rate);

    return (
        <div className="body-container">
            <div className="container container-card">
                <div className="card">
                    <Link to={`/products/${product.id}`}>
                        <img
                            className="product-img"
                            src={product.image}
                            alt={product.title}
                        />
                    </Link>
                    <div className="product-detail">
                        <span className="product-title">{product.title}</span>
                        <div className="rating">
                            <div
                                dangerouslySetInnerHTML={{ __html: stars }}
                            ></div>
                            <p className="rate-count">
                                ({product.rating.count})
                            </p>
                        </div>

                        <div className="buttons">
                            <div className="price">${product.price}</div>
                            <button
                                className="cart btn"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to cart
                            </button>
                            {/* <button className="favourite btn">
                                <i className="far fa-heart"></i>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
