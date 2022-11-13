import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import PEPSI from "./ProductDetail/img_products/Pepsi-Logo.png"
import FANTA from "./ProductDetail/img_products/Fanta-Logo.png"
import SPRITE from "./ProductDetail/img_products/Sprite-Logo.png"
import SCHWEPPES from "./ProductDetail/img_products/Schweppes-Logo.png"
import PepsiIcon from "./ProductDetail/img_products/Pepsi-Icon.png";
import FantaIcon from "./ProductDetail/img_products/Fanta-Icon.png";
import SchweppesIcon from "./ProductDetail/img_products/Schweppes-Icon.png";
import SpriteIcon from "./ProductDetail/img_products/Sprite-Icon.jpg";
import "./ProductPage.css"
import { useState } from "react";
const ProductPage = () =>{
  const wraperFunction = (name,img) =>{
    setProd(name);
    setImg(img);
  }
  window.scroll(0,0);
  const [prods,setProd] = useState("PEPSI");
  const [img,setImg] = useState(PEPSI);
  return (
    <div style={{background:"#fff"}}>
          <Navbar />
          <div className="product-navbar">
            <img src={PepsiIcon} style={{width:"5%"}} alt="" onClick={() => wraperFunction("PEPSI",PEPSI)} className="product-icon"/>
            <img src={FantaIcon} style={{width:"6%"}} alt="" onClick={() => wraperFunction("FANTA",FANTA)} className="product-icon"/>
            <img src={SchweppesIcon} style={{width:"5%"}} alt="" onClick={() => wraperFunction("SCHWEPPES",SCHWEPPES)} className="product-icon"/>
            <img src={SpriteIcon} style={{width:"5%"}} alt="" onClick={() => wraperFunction("SPRITE",SPRITE)} className="product-icon"/>
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
