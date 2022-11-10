import ProductPage from './components/product/ProductPage'
import Homepage from './components/HomePage/homePage';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import PurchesPage from './components/purchase/purchase';
import ProductDetail from './components/product/ProductDetail/ProductDetail';
function App() {
  return (
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/purches" element={<PurchesPage/>}></Route>
          <Route path="/product" element={<ProductPage/>}></Route>
          {/* <Route path="/product/:page" element={<ProductDetail/>}></Route> */}
        </Routes>
  );
}

export default App;
