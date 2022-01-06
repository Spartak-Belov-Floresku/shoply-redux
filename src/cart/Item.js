import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import actions from "../reducer/actions";
import FormatPrice from "../helper/FormatPrice";

const Item = ({id, tag_name, amount, image_url, price}) => {
    
    const dispatch = useDispatch();
    const total = totalPrice(amount, price);

    return(
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

const totalPrice = (amount, price) => {

    if(amount){
        const total = amount * price;
        amount = FormatPrice(total);
    }

    return amount;
}

export default Item;