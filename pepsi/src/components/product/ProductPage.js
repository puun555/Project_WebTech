import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import "./ProductPage.css"
const ProductPage = () =>{
  return (
      <div className="product-navbar"><Navbar />
          <div className="product-container product-body">
            {products.map((element)=>{
              return <Product {...element} key={element.id}/>
            })}
          </div>
          
      </div>
      
  )
}

export default ProductPage;
