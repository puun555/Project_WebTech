import Navbar from "../../HomePage/navbar"
import "./ProductStyle.css"
import { Link,useParams} from "react-router-dom"
import Item from "../products.json"
import React from "react"
const ProductDetail = () =>{
    let {page} = useParams();
    // eslint-disable-next-line
    const firstCond = (Number(page) == 0);
    // eslint-disable-next-line
    const secCond = (Number(page) == 38);
    
    return(
            <div className="detail-body">
                <div className="detail-background" style={{backgroundColor:Item[page].background_color}}></div>
                <Navbar />
                {firstCond ? (
                    <>
                        <Link className="previousPage" to={{
                        pathname : `/product/${parseInt(page)+38}`,
                        }}>
                        </Link>
                    </>
                ):(<>
                        <Link className="previousPage" to={{
                        pathname : `/product/${parseInt(page)-1}`,
                        }}>
                        </Link>
                </>)}
                {secCond ?(
                    <>
                        <Link className="nextPage" to={{
                        pathname : `/product/${parseInt(page)-38}`,
                        }}>
                        </Link>
                    </>
                ):(<>
                        <Link className="nextPage" to={{
                        pathname : `/product/${parseInt(page)+1}`,
                        }}>
                        </Link>
                </>)}
                    
                <div className="detail-container">
                    <div className="detail-box">
                        <div className="inside-box">
                            <h2>{Item[page].name}</h2>
                            <h3>NUTRITION FACTS</h3>
                            <p>Serving Size {Item[page].nutrition_facts.serving_size[0]} ({Item[page].nutrition_facts.serving_size[1]})</p>
                            <p>Servings Per Container {Item[page].nutrition_facts.servings_per_container[0]}</p>
                            <p style={{marginTop:"10px", borderTop:"1px solid black"}}>Amount per Serving</p>
                            <p style={{borderBottom:"5px solid black"}}>Calories {Item[page].nutrition_facts.calories}</p>
                            <p style={{textAlign:"right"}}>% Daily Value *</p>
                            <p>Total fat {Item[page].nutrition_facts.daily_value.fat[0]}<span>{Item[page].nutrition_facts.daily_value.fat[1]}</span></p>
                            <p>Sodium {Item[page].nutrition_facts.daily_value.sodium[0]}<span>{Item[page].nutrition_facts.daily_value.sodium[1]}</span></p>
                            <p>Total Carbohydrate {Item[page].nutrition_facts.daily_value.carbohydrate[0]}<span>{Item[page].nutrition_facts.daily_value.carbohydrate[1]}</span></p>
                            <p>Sugars {Item[page].nutrition_facts.daily_value.sugars}</p>
                            <p style={{borderBottom:"5px solid black"}}>Protein {Item[page].nutrition_facts.daily_value.protein}</p>
                            <p>Not a significant source of other nutrients.</p>
                            <p>*Percent Daily Values are based on a 2,000 calorie diet.</p>
                        </div>
                        <div className="navbar-right">
                                <Link to="/purches"><div className='navbar-item'>Buy now</div></Link>
                        </div>
                    </div>
                    <img className="detail-img" src={`../${Item[page].img_product}`} alt=""/>
                </div>
            </div>
    )
}
export default ProductDetail