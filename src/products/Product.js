import { useParams, Redirect} from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux";


const Product = () => {
    const { id } = useParams();
    const products = useSelector(state=>state.allProducts.products);
    
    if(!products[id])
        return <Redirect to="/"/>
    


    return(
        <div className="col-md-8 offset-md-2">
            <ProductDetails
            id={id}
            tag_name={products[id].name}
            price={products[id].price}
            description={products[id].description}
            image_url={products[id].image_url} 
          />
        </div>
      )
}

export default Product;