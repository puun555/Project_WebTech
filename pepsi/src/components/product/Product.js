import {Link} from "react-router-dom";
import "./ProductPage.css"
const Product = ({name,img_product,background_color,id,page}) =>{
    const design = background_color
    return (
            <Link to={{
                pathname : `/product/${id-1}`,
            }} className="product-item">
                <p id="tooltip" ><strong>{name}</strong></p>
                <div className="background-color" style={{background:design}}></div>
                <p className="productName" style={{animationDelay: `${(id-1)/12}s`}}><strong>{name}</strong></p>
                <img src={img_product} alt="" style={{animationDelay: `${(id-1)/20}s`}}/>
            </Link>
    )
}
export default Product