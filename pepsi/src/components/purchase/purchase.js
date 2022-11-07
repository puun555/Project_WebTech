import ShowProduct from './showAllproduct/ShowProduct'
import './purchase.css'
import Navbar from '../HomePage/navbar'
import { useState} from 'react'
import Products from './products.json'
const PurchesPage = ()=>{
    {window.scroll(0,0)}
    const [fileredItem, setFileredItem] =useState(Products)
    const getData = (data)=>{
        const BigData = data.toUpperCase()
        const FilteredItem = Products.filter((dummy)=>{
            return dummy.name.includes(BigData)
        })
        if(FilteredItem.length > 0){
            setFileredItem(FilteredItem)
        }
        else{
            alert("Nothing")
            setFileredItem(Products)
        }
    }
    // const Fil    terItem = DummyProduct.filter((dummy)=>{
    //     return dummy.name.includes(data.toUpperCase())
    // })
    return (
        <div className="body-mainpage">
            <Navbar></Navbar>
            <ShowProduct data={fileredItem} getText={getData}></ShowProduct>
        </div>
    )
}
export default PurchesPage