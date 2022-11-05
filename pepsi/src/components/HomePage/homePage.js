import Navbar from './navbar';
import React from 'react';
import Nitro from './nitro';
import './homePage.css'
import Pourstep from './pourstep.tsx';
import SectionVideo from './video';
import SectionCoke from './coke';
import Schwepp from './schwepp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Homepage () {

    return (
        <div>
            <Navbar></Navbar>
            <section className='product-section'>
                <div className='product-promot'></div>
                <div className='product-soda'></div>
                <div className='product-cherry'></div>
            </section>
            <Nitro></Nitro>
            <Schwepp></Schwepp>
            <SectionCoke></SectionCoke>
            <SectionVideo></SectionVideo>
            <Pourstep></Pourstep>
            <div style={{height: "100em"}} />

        </div>
    )
}
export default Homepage;