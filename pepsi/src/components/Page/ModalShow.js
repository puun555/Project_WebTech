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
                name: props.items.name+"(ขิ้น)",
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
                name: props.items.name+"(pack)",
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
                        <h3>{props.items.name} 325มล.</h3>
                        <p>น้ำอัดลมสุดแสนจะอร่อย บริการให้คุณอย่างสะดวกสบายเพียงแค่ปลายนิ้ว ท่านสามารถเลือกได้ว่าจะสั้งแบบไหน</p>
                        <h4>{props.items.price} <small>บาท</small>/ ชิ้น</h4>
                        <h4>{props.items.price*6} <small>บาท</small>/ แพ็ค(6ขิ้น)</h4>
                    </div>
                    <div className='button-group'>
                    <h2 className='pinbutton'>เลือกสิ้นค้า</h2>
                           <div id='sizebtn' role="button" className="rounded d-flex justify-content-center align-items-center botton"
                            style={{
                            color: "white",
                            width: "4rem",
                            height: "4rem",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            marginRight: '2vw'
                            }}
                            onClick={()=>getSize( "1")}
                            tabIndex="1">
                                1 ชิ้น
                            
                           </div>
                           <div id='sizebtn'role="button" className="rounded  d-flex justify-content-center align-items-center botton"
                            style={{
                            color: "white",
                            width: "4rem",
                            height: "4rem",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            marginRight: '2vw'
                            }}
                            onClick={()=>getSize("6")}
                            tabIndex="1">
                                1 pack
                           </div>
                    </div>
                        <div className='submitbutton'>
                            <a type="button" className="rounded  btn btn-primary btn-lg btn-block bg-dark agear"
                                onClick={()=>getData(props, Size)}
                            >Add To Cart</a>
                        </div>
                    </div>
            </div>
        </Container>
      </Modal.Body>
    </Modal>
    )
}
export default MyVerticallyCenteredModal