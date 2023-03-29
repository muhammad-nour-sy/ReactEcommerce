import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

const CategoriesContext = createContext();
export function capitalizeWords(str) {
  return str.split(' ').map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(' ');
}
export function toCamelCase(str) {
  return str
    .split(/[\s_-]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join('');
}

const useCategories = () => {
  const { data, isPending, error } = useFetch('https://fakestoreapi.com/products/categories');

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      const newCategories = data.map((category) => {
        const path='/'+toCamelCase(category);
        const title=capitalizeWords(category);
        return({
        title: title,
        path: path,
        name:category
      })});
      setCategories(newCategories);
    }
  }, [data]);

  return { categories, isPending, error };
};

const CategoriesProvider = ({ children }) => {
  const categories = useCategories();
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error(
      "useCategoriesContext must be used within a CategoriesProvider"
    );
  }
  return context;
};

export { CategoriesProvider, useCategoriesContext };
