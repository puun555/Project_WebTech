import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import "./ProductPage.css"
const ProductPage = () =>{
  {window.scroll(0,0)}
  return (
      <div className="product-navbar"><Navbar />
        
          <div className="product-container product-body">
          <div className="product-bg"></div>
            {products.map((element)=>{
              return <Product {...element} key={element.id}/>
            })}
          </div>
          
      </div>
      
  )
}

export default ProductPage;
