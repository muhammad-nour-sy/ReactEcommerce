import AllProductsList from "./AllProductsList";
import CategoryList from "./CategoryList";
import { useCategoriesContext } from "../useCategories";


  

const Home = () => {
    const { categories, isPending, error } = useCategoriesContext();
    return (
        <div class="home">
            <AllProductsList />
            {categories&& categories.map((category,i)=>(
                <CategoryList category={category.name} key={i} />
            ))}
            
        </div>
    );
};

export default Home;
