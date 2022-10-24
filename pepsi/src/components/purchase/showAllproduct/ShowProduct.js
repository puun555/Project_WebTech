import './ShowProduct.css'
import MyOffcanvas from '../offcanvas/Offcanvas'
import Product from './Product'
import { useState } from 'react'


const ShowProduct = (props)=>{
    const getDeleteData = (data)=>{
        DeleteData(data)
    } 
    const [NewItems, setNewItem ] = useState([])
    const [countItems, setCountItems] = useState(0)

    const getFinalData = (event) =>{
        setCountItems(countItems + event.count)
        setNewItem(preitem  =>{
         if(preitem.find(item =>item.id === event.id) == null){
          return [...preitem, event]
            }else{
               return preitem.map(item =>{
                  if(item.id === event.id){
                      return {...item, count: item.count+1, price: item.price + event.price}
                  }else{
                      return item
                  }
               })
         }
        })
  } 

    const DeleteData  = (data) =>{
        setCountItems(countItems - 1)
        setNewItem(preitem  =>{
            if(preitem.find(item =>item.id === data.id)?.count ===1){
            return preitem.filter(item => item.id != data.id)
            }else{
                return preitem.map(item =>{
                    if(item.id === data.id){
                        return {...item, count: item.count-1 , price: item.price - item.newPrice}
                    }else{
                        return  item
                    }
                })
            }
        })
    }
    return (
        <div className="showProduct">
            <MyOffcanvas newData ={NewItems}  getDelData={getDeleteData}></MyOffcanvas>
            <Product items ={props.data} getFinalData={getFinalData}  ></Product>
    </div>
    )
}
export default ShowProduct