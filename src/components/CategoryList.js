import useFetch from "../useFetch";
import ProductsList from "./ProductsList";

const CategoryList = ({ category }) => {
    const {
        data: products,
        isPending,
        error,
    } = useFetch("https://fakestoreapi.com/products/category/" + category);

    return (
        <div className="category-list">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {products && <ProductsList products={products} title={category} />}
        </div>
    );
};

export default CategoryList;
