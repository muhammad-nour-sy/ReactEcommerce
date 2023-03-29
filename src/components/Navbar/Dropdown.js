import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { useCategoriesContext } from "../../useCategories";


const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const { categories, isPending, error } = useCategoriesContext();

    
         
    return (
        <div>
            <ul
                onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
            >
                {categories && categories.map((category, index) => (
                    <li key={index}>
                        <Link
                            to={category.path}
                            className="category-link"
                            onClick={() => setClick(false)}
                        >
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
