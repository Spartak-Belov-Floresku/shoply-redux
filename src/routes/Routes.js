import { Switch, Route, Redirect } from "react-router-dom";
import Products from "../products/Products";
import Product from "../products/Product";
import Cart from "../cart/Cart";


const Routes = () => {
    return(
        <div className="pt-5">
            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                <Route exact path="/products/:id">
                    <Product />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;