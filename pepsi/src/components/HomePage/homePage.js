import Navbar from './navbar';
import React from 'react';
import Banner from './banner';
import Footer from './footer';
import Bestseller from './bestseller';
import New from './new';
import Bestoffer from './bestoffer'
import './homePage.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Featured from './featured';
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
            <Featured></Featured>
            <Bestseller></Bestseller>
            <Bestoffer></Bestoffer>
            <New></New>
            {/* <SectionCoke></SectionCoke> */}
            {/* <SectionVideo></SectionVideo> */}
            {/* <Pourstep></Pourstep> */}
            <Footer></Footer>
        </div>
    )
}
export default Homepage;