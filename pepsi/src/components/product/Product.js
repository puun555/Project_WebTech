import {Link} from "react-router-dom";
import "./ProductPage.css"
const Product = ({name,img_product,background_color,id,page}) =>{
    return (
            <div className="product-list">
                <img src={img_product} alt=""/>
                <strong>{name}</strong>
            </div>
    )
}
export default Product