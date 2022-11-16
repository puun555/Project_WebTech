import './featured.css'
import schwep from './img/schweppes.png'
import pepsi from './img/pepsi.png'
import sprite from './img/sprite.png'
import fanta from './img/fanta.png'
const Featured = ()=>{
    return(
        <div className='featured-container'>
            <div className='featured-top'>
                <div className='featured-text'>FEATURED BRAND</div>
            </div>
            <div className='featured-bot'>
                <div className='boxf schweppes'>
                    <img className='img-sch' src='schwep'></img>
                </div>
                <div className='boxf pepsi'>
                    <img src='./img/pepsi.png'></img>
                </div>
                <div className='boxf sprite'></div>
                <div className='boxf fanta'></div>
            </div>
            
        </div>  
    )
}
export default Featured