import useFetch from "../useFetch";
import ProductsGrid from "./ProductsGrid";

const CategoryGrid = ({category}) => {
    const {
        data: products,
        isPending,
        error,
    } = useFetch("https://fakestoreapi.com/products/category/" + category);

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
 
export default CategoryGrid;