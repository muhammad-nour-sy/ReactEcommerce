import useFetch from "../useFetch";
import ProductsList from "./ProductsList";

const AllProductsList = () => {
    const {
        data: products,
        isPending,
        error,
    } = useFetch("https://fakestoreapi.com/products");

    return (
        <div className="all-products-list">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {products && (
                <ProductsList products={products} title="All Products!" />
            )}
        </div>
    );
};

export default AllProductsList;
