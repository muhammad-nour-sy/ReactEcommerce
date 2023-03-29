import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import "../styles/ProductDetails.css";
import ProductPage from "./ProductPage";

const ProductDetails = () => {
    const { id } = useParams();

    const history = useHistory("");

    function capitalizeWords(str) {
        return str
            .split(" ")
            .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
            .join(" ");
    }
    const {
        data: product,
        isPending,
        error,
    } = useFetch("https://fakestoreapi.com/products/" + id);
    
    return (
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && <ProductPage product={product}/>
                
            }
        </div>
    );
};

export default ProductDetails;
