import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import MainPage from './components/Page/Mainpage.js'
import ProductDetail from './components/product/ProductDetail/ProductDetail'
import LoginPage from './components/Logincpn/LoginPage'
import Payment from './components/Payment/PaymentPage';
import ContactPage from './components/Contact/contact';
import ProductPage from './components/product/ProductPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/it1/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
