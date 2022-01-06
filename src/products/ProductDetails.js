import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import actions from "../reducer/actions";
import FormatPrice from "../helper/FormatPrice";

const ProductDetails = ({id, tag_name, price, description, image_url}) => {

    const cart = useSelector(st => st.userCart);
    const dispatch = useDispatch();

    const amount = productInCart(id, cart);
    const total = totalPrice(amount, price);
    
    return (
        <div className="ProductDetails card">
          <div className="card-body">
            <div className="card-body">
                <h6 className="card-title"><NavLink to={`/products/${id}`}>{tag_name.toUpperCase()}</NavLink>
                    <span style={{float:"right"}}>The amount of the item in the cart: 
                        <b> {amount}</b>
                    </span>
                </h6>
                <h6 className="card-title">
                    {image_url && <img src={image_url} alt={tag_name} className="float-right ml-5" />}
                </h6>
                <p><small>{description}</small></p>
                {price && <p><small>Price: {FormatPrice(price)}</small></p>}

                <button type="button" className="btn btn-success" onClick={()=> dispatch(actions(id, "add")) }>Add to cart</button>
                <button type="button" className="btn btn-danger"  onClick={()=> dispatch(actions(id, "delete")) }>Remove from cart</button>
                <h6 className="card-title">
                    <span style={{float:"right"}}>Total: <b> {total}</b></span>
                </h6>
            </div>
          </div>
        </div>
    );
}

const productInCart = (id, cart) =>{
    let amount = 0
    if(cart){
        amount = cart[id];
        if(!amount)
            amount = 0;
    }
    return amount
}

const totalPrice = (amount, price) => {

    if(amount){
        const total = amount * price;
        amount = FormatPrice(total);
    }

    return amount;
}



export default ProductDetails;