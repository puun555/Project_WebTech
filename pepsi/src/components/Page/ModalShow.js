import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'
import './ModalShow.css'
import { useEffect, useState } from 'react';
const  MyVerticallyCenteredModal = (props)=>{
    const [selected, setSelected] = useState("ยังไม่ได้เลือก")
    let Size = "";
    const getSize = (size)=>{
        Size = size
        console.log(Size)
    }
    const changeText = (data) =>{
        selected(data)
    }
    let size = ""
    const getData = (data, Size)=>{
    
        size = Size
        if(Size==="1"){
            const NewDataAdd = {
                name: props.items.name+" (Can)",
                pic : props.items.img_product,
                price : props.items.price ,
                id : props.items.id,
                count : props.items.count,
                newPrice : props.items.price,
            }
            props.ReData(NewDataAdd)
        }
        
        else if(Size==="6"){
            const NewDataAdd = {
                name: props.items.name+" (Pack)",
                pic : props.items.img_product,
                price : props.items.price *Size,
                id : props.items.id + 50,
                count : props.items.count ,
                newPrice : props.items.price*Size,
            }
            props.ReData(NewDataAdd)
        }
    }
    console.log(size)
    useEffect(()=>{
        setSelected(Size)
       },[Size])

    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body 
    
      >
        <Container
            className='Modalcontainer'
        >
            <div className='box-modal'>
                <div className='left-modal'>
                    <div className='img-modal'>
                        <img src={props.items.img_product}></img>
                    </div>
                </div>
                <div className='right-modal'>
                    <div className='title'>
                        <p className='title-up'>Product</p>
                        <h3>{props.items.name} 325 ML.</h3>
                        <p>Super delicious soft drink Service for you conveniently at your fingertips. You can choose which one to order.</p>
                        <h4>{props.items.price} <small>Baht</small>/Can</h4>
                        <h4>{props.items.price*6} <small>Baht</small>/Pack(6 Can)</h4>
                    </div>
                    <div className='button-group'>
                    <h2 className='pinbutton'>Select product</h2>
                           <div id='sizebtn' role="button" className=" d-flex justify-content-center align-items-center botton" 
                            style={{
                            color: "white",
                            width: "7rem",
                            height: "2.5rem",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            marginRight: '2vw'
                            }}
                            onClick={()=>getSize( "1")}
                            tabIndex="1" selected>
                                1 Can
                            
                           </div>
                           <div id='sizebtn'role="button" className="  d-flex justify-content-center align-items-center botton"
                            style={{
                            color: "white",
                            width: "7rem",
                            height: "2.5rem",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            marginRight: '2vw'
                            }}
                            onClick={()=>getSize("6")}
                            tabIndex="1">
                                1 Pack
                           </div>
                    </div>
                        <div className='submitbutton'>
                            <a type="button" className=" d-flex justify-content-center align-items-center botton" style={{padding:"10px"}}
                                onClick={()=>getData(props, Size)}
                            >Add to cart</a>
                        </div>
                    </div>
            </div>
        </Container>
      </Modal.Body>
    </Modal>
    )
}
export default MyVerticallyCenteredModal