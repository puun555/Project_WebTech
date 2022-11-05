import pepsiLogo from '../assets/homePage/pepsiLogo.png'
import {Link} from "react-router-dom";
import './navbar.css'
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <div className="navbar-item">
                        <img src={pepsiLogo}/>
                    </div>
                </Link>
                <div className='navbar-item' style={{"padding-left":'40px'}} >view product</div>
                <div className='navbar-item'>what's new</div>
                <div className='navbar-item'>newsletter</div>
                <div className='navbar-item'>contact us</div>
            </div>
            <div className="navbar-right">
              <Link to="/purches"><a><div className='navbar-item' id='buy'>buy pepsi products</div></a></Link>
            </div>
        </div>
    )
}
export default Navbar