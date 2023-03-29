import useFetch from "../useFetch";
import ProductsGrid from "./ProductsGrid";

const AllProductGrid = () => {
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
                <ProductsGrid products={products} title="All Products!" />
            )}
        </div>
    );
}
 
export default AllProductGrid;