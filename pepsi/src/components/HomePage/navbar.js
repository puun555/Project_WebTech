import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './navbar.css'
const Navbar = () =>{
    const [isOpen,setOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <div className="navbar-item" id="navbarhead">
                        Kumi Shop
                    </div>
                </Link>
            </div>
            
            {/* <div className="navbar-center">
                
                <div className='navbar-item'>what's new</div>
                <div className='navbar-item'>newsletter</div>
                
            </div> */}
            <input type="checkbox" id="checkbox"/>
                <a className="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
            <div className="navbar-right">
                <ul>
                    <li><Link to="/product"><div className='navbar-item' >view product</div></Link></li>
                    <li><Link to="/product"><div className='navbar-item'>contact us</div></Link></li>
                    <li><Link to="/purches"><a><div className='navbar-item' id='buy'>buy products</div></a></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar