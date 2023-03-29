import { capitalizeWords } from "../useCategories";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductPage = ({ product }) => {
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

    let stars = getStars(product.rating.rate);
    return (
        <div>
            <div className="product-details-container">
                <div className="box">
                    <div className="images">
                        <div className="img-holder">
                            <img src={product.image} />
                        </div>
                    </div>
                    <div className="basic-info">
                        <div className="product-title">
                     
                            <h1>{product.title}</h1>
                        </div>
                        <div className="product-category">
                     
                            <h4>{capitalizeWords(product.category)}</h4>
                        </div>
                        <div className="rate">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: stars,
                                }}
                            ></div>
                            <p className="rate-count">
                                ({product.rating.count})
                            </p>
                        </div>
                        <span><b>Price: ${product.price}</b></span>
                        <div className="options">
                            <button>Buy It Now</button>
                            <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="description">
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
