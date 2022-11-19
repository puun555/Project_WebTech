import './featured.css'
import schweppesbr from './img/schweppes.png'
import pepsibr from './img/pepsi.png'
import spritebr from './img/sprite.png'
import fantabr from './img/fanta.png'
const Featured = ()=>{
    return(
        <div className='featured-container'>
            <div className='featured-top'>
                <div className='featured-text'>FEATURED BRAND</div>
            </div>
            <div className='featured-bot'>
                <div className='boxf schweppes'>
                    <img className='fimg' src={schweppesbr} width="65%"></img>
                </div>
                <div className='boxf pepsi'>
                    <img className='fimg' src={pepsibr} width="65%"></img>
                </div>
                <div className='boxf sprite'>
                    <img className='fimg' src={spritebr} width="65%"></img>
                </div>
                <div className='boxf fanta'>
                    <img className='fimg' src={fantabr} width="65%"></img>
                </div>
            </div>
            
        </div>  
    )
}
export default Featured