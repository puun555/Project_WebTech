import './banner.css'
import logo from '../assets/homePage/logo.png'
const Banner = ()=>{
    return(
        <div className='banner-container'>
            <div className='item'>
                <div className='logo'>
                    <img src={logo} style={{width: "500px"}}/>
                </div>
                <div className='text'>Fresh</div>            
            </div>
        </div>
    )
}

export default Banner