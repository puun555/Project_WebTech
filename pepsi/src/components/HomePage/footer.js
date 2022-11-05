import './banner.css'
import logo from '../assets/homePage/logo.png'
const Banner = ()=>{
    return(
        <div className='banner-container'>
            <div className='item'>
                <div className='logo'>
                    <img src={logo} style={{width: "500px"}}/>
                </div>
                <div className='text'>
                    I DONT'T CARE HOW OLD I AM<br></br>
                    I'LL ALWAYS DRINK
                </div>            
            </div>
        </div>
    )
}

export default Footer