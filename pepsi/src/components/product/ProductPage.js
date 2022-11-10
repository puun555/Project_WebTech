import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import PepsiLogo from "./ProductDetail/img_products/Pepsi-Logo.png"
import FantaLogo from "./ProductDetail/img_products/Fanta-Logo.png"
import SpriteLogo from "./ProductDetail/img_products/Sprite-Logo.png"
import "./ProductPage.css"
const ProductPage = () =>{
  {window.scroll(0,0)}
  return (
    <div style={{background:"#e4e6e7"}}>
          <Navbar />
          <div className="product-container">
            <div className="product-header">
              <img src={PepsiLogo} style={{width:"30%"}} alt=""/>
            </div>
            <div className="product-body">
            {products.filter(prod => prod.name.includes("PEPSI")).map(filteredName => (
              <Product {...filteredName} key={filteredName.id}/>
            ))}
            </div>

            <div className="product-header">
              <img src={FantaLogo} style={{width:"30%"}} alt=""/>
            </div>
            <div className="product-body">
            {products.filter(prod => prod.name.includes("FANTA")).map(filteredName => (
              <Product {...filteredName} key={filteredName.id}/>
            ))}
            </div>
              
            <div className="product-header">
              <h1>SCHWEPPES</h1>
            </div>
            <div className="product-body">
            {products.filter(prod => prod.name.includes("SCHWEPPES")).map(filteredName => (
              <Product {...filteredName} key={filteredName.id}/>
            ))}
            </div>

            <div className="product-header">
            <img src={SpriteLogo} style={{width:"30%"}} alt=""/>
            </div>
            <div className="product-body">
            {products.filter(prod => prod.name.includes("SPRITE")).map(filteredName => (
              <Product {...filteredName} key={filteredName.id}/>
            ))}
            </div>
          </div>
    </div>
  )
}

export default ProductPage;
