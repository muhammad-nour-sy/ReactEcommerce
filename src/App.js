import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllProductGrid from "./components/AllProductGrid";
import AllProductsList from "./components/AllProductsList";
import CategoryGrid from "./components/CategoryGrid";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails";
import { useCategoriesContext } from "./useCategories";
import Cart from "./components/Cart";

function App() {
    const { categories, isPending, error } = useCategoriesContext();
    console.log(categories);
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Navbar />
                    <div className="App">
                        {/* <Navbar /> */}
                        <div className="content">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/allproducts">
                                    <AllProductGrid />
                                </Route>
                                <Route path="/productslist">
                                    <AllProductsList />
                                </Route>
                                {categories &&
                                    categories.map((category, i) => (
                                        <Route key={i} path={category.path}>
                                            <CategoryGrid
                                                category={category.name}
                                            />
                                        </Route>
                                    ))}
                                <Route path="/products/:id">
                                    <ProductDetails />
                                </Route>
                                <Route path="/cart">
                                    <Cart />
                                </Route>
                                {/* <Route path="*">
                                    <Home />
                                </Route> */}
                               
                            </Switch>
                        </div>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
