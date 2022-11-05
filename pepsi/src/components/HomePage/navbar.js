import img from '../assets/homePage/imgicon.png'
import {Link} from "react-router-dom";
import './navbar.css'
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <div className="navbar-item">
                        {/* <img src={imgicon}/> */}
                        Kumi Shop
                    </div>
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="/product"><div className='navbar-item' style={{"padding-left":'40px'}} >view product</div></Link>
                <div className='navbar-item'>what's new</div>
                <div className='navbar-item'>newsletter</div>
                <div className='navbar-item' style={{"padding-right":'40px'}} >contact us</div>
            </div>
            <div className="navbar-right">
              <Link to="/purches"><a><div className='navbar-item' id='buy'>buy products</div></a></Link>
            </div>
        </div>
    )
}
export default Navbar