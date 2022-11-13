import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import PEPSI from "./ProductDetail/img_products/Pepsi-Logo.png"
import FANTA from "./ProductDetail/img_products/Fanta-Logo.png"
import SPRITE from "./ProductDetail/img_products/Sprite-Logo.png"
import SCHWEPPES from "./ProductDetail/img_products/Schweppes-Logo.png"
import "./ProductPage.css"
import { useState } from "react";
const ProductPage = () =>{
  const wraperFunction = (name,img) =>{
    setProd(name)
    setImg(img);
  }
  const [prods,setProd] = useState("PEPSI");
  const [img,setImg] = useState(PEPSI);
  return (
    <div style={{background:"#fff"}}>
          <Navbar />
          <div className="product-navbar">
            <h2 onClick={() => wraperFunction("PEPSI",PEPSI)}>PEPSI</h2>
            <h2 onClick={() => wraperFunction("FANTA",FANTA)}>FANTA</h2>
            <h2 onClick={() => wraperFunction("SCHWEPPES",SCHWEPPES)}>SCHWEPPES</h2>
            <h2 onClick={() => wraperFunction("SPRITE",SPRITE)}>SPRITE</h2>
          </div>
          <div className="product-container">
            <div className="product-header" >
              <img src={img} style={{width:"20%"}} alt=""/>
            </div>
            <div className="product-body" id="product-pepsi">
              {products.filter(prod => prod.name.includes(prods)).map(filteredName => (
                <Product {...filteredName} key={filteredName.id}/>
              ))}
            </div>

            
          </div>
    </div>
    
  )
  
}

export default ProductPage;
