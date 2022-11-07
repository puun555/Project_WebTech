
import React from 'react';
import './Offcanvas.css'
import FilterCanvas from './FillterCanvas';
const MyOffcanvas = (props)=>{
    const reciveData = (data)=>{
        props.getDelData(data)
    }
    const addrecive = (data) =>{
       props.getAddData(data)
    }
    return(
        <div className='box-profiles'>
            <div className='text-box'>
            </div>
            <FilterCanvas newDataAdd={props.newData} reciveData={reciveData}  addData={addrecive} ></FilterCanvas>
        </div>
    )
}
export default MyOffcanvas