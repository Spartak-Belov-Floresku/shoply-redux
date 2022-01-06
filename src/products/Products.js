import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";


const Products = () =>{
  const products = useSelector(state=>state.allProducts.products);
  const keys = Object.keys(products)

  return(
    <div className="col-md-8 offset-md-2">
        {keys.map( key => (
          <ProductDetails
            key={key}
            id={key}
            tag_name={products[key].name}
            price={products[key].price}
            description={products[key].description}
            image_url={products[key].image_url} 
          />
        ))}
    </div>
  )
}

export default Products;