import ShowProduct from './showAllproduct/ShowProduct'
import './purchase.css'
import Navbar from '../HomePage/navbar'
import { useState} from 'react'

const PurchesPage = ()=>{
    const DummyProduct = [
        {   
            id: 1,
            name : 'Pepsi',
            price : 200,
            img_product: "https://www.pepsi.com/en-us/uploads/images/can-pepsi.png?mtime=20180110134757",
            count : 1

        },
        {
            id: 2,
            name : 'PEPSI ZERO SUGAR',
            price : 150,
            img_product: "https://www.pepsi.com/en-us/uploads/images/can-pepsi-zero-sugar.png",
            count : 1

        },
        {
            id: 3,
            name :  'DIET PEPSI',
            price : 100,
            img_product: "https://www.pepsi.com/en-us/uploads/images/Diet-Pepsi-v2_12oz.png?mtime=20180215173735",
            count : 1

        },
        {
            id: 4,
            name :  "PEPSI MANGO",
            price : 220,
            img_product: "https://www.pepsi.com/en-us/uploads/images/can-pepsi-mango.png",
            count : 1
        },
        {
            id: 5,
            name :  "PEPSI ZERO SUGAR MANGO",
            price : 180,
            img_product: "https://www.pepsi.com/en-us/uploads/images/can-pepsi-zero-sugar-mango.png",
            count : 1
        },
        {
            id: 6,
            name :  "DIET PEPSI WILD CHERRY",
            price : 280,
            img_product: "https://www.pepsi.com/en-us/uploads/images/Diet-Pepsi-Cherry-v3_12oz.png",
            count : 1
        },
    
    ]
    const [fileredItem, setFileredItem] =useState(DummyProduct)
    const getData = (data)=>{
        const BigData = data.toUpperCase()
        const FilteredItem = DummyProduct.filter((dummy)=>{
            return dummy.name.includes(BigData)
        })
        if(FilteredItem.length > 0){
            setFileredItem(FilteredItem)
        }
        else{
            alert("Nothing")
            setFileredItem(DummyProduct)
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