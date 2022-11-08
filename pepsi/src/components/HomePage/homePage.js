import Navbar from './navbar';
import React from 'react';
import Banner from './banner';
import Footer from './footer';
import './homePage.css'
import Pourstep from './pourstep.tsx';
import SectionVideo from './video';
import SectionCoke from './coke';
import Schwepp from './schwepp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Homepage () {
    {window.scroll(0,0)}
    return (
        <div style={{width:"100%"}}>
            <Navbar></Navbar>
            {/* <section className='product-section'>
                <div className='product-promot'></div>
                <div className='product-soda'></div>
                <div className='product-cherry'></div>
            </section> */}
            <Banner></Banner>
            <Schwepp></Schwepp>
            {/* <SectionCoke></SectionCoke>
            <SectionVideo></SectionVideo> */}
            <Pourstep></Pourstep>
            {/* <Footer></Footer> */}
        </div>
    )
}
export default Homepage;