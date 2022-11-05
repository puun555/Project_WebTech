
import './schwepp.css'
import schweppgreen from '../assets/homePage/schweppes-ginger.png'
import schweppgreenB from '../assets/homePage/schweppes-dark-ginger.png'
import schwepppink from '../assets/homePage/schweppes-raspberry-ginger.png'
import schwepppinkB from '../assets/homePage/schweppes-diet-raspberry-ginger.png'
import schwepppurple from '../assets/homePage/schweppes-dry-grape-ginger.png'
import schweppblack from '../assets/homePage/schweppes-black-cherry-ginger-ale.png'
const Schwepp = () =>{
    return(
        <section className = "schwepp-product">
            <div className='schwepp-header'>
                {/* <div>SPRAKLING WATER BEVERAGES</div> */}
            </div>
            <div className='schwepp-item'>
                <img src={schweppgreen} className='schwepp-can'></img>
                <img src={schweppgreenB}></img>
                <img src={schwepppink} className='schwepp-can'></img>
                <img src={schwepppinkB}></img>
                <img src={schwepppurple}></img>
                <img src={schweppblack}></img>
            </div>
            <div className='schwepp-bottom'>
                {/* <h1>gear</h1> */}
            </div>
        </section>
    )
}
export default Schwepp