import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

const Cart = () => {

    const cart = useSelector(st => st.userCart);
    const products = useSelector(state=>state.allProducts.products);
    const ids = Object.keys(cart)
    

    if(!ids.length)
        return(
            <div className="col-md-8 offset-md-2">
                <h4>You don't have anything in your shopping cart yet.</h4>
            </div>
        );
    

    
    const userProducts = ids.map(id => ({...products[id],'id': id }));

    const items = userProducts.map(product => <Item 
                                                key={product.id}
                                                id={product.id} 
                                                tag_name={product.name} 
                                                amount={cart[product.id]}
                                                image_url={product.image_url}
                                                price={product.price}
                                            />);


    return(<div className="col-md-8 offset-md-2">{items}</div>);
    
}
export default Cart;