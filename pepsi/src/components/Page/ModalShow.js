import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'
import './ModalShow.css'
const  MyVerticallyCenteredModal = (props)=>{
    let Size = "";
    const getSize = (size)=>{
        Size = size
        console.log(Size)
    }
    const getData = (data, Size)=>{
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
    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body >
        <Container>
            <div className='box-modal'>
                <div className='left-modal'>
                  
                    <div className='img-modal'>
                        <img src={props.items.img_product}></img>
                    </div>
                </div>
                <div className='right-modal'>
                    <div className='title'>
                        <h4>Product</h4>
                        <h2>{props.items.name} 325มล.(1กระป๋อง)</h2>
                        <h2>{props.items.price} <small>บาท</small>/ ชิ้น</h2>
                        <h2>{props.items.price*6} <small>บาท</small>/ แพ็ค(6ขิ้น)</h2>
                        <p>เลือกสิ้นค้า</p>
                    </div>
                    <div className='button-group'>
                           <div id='sizebtn' role="button" className="rounded-circle d-flex justify-content-center align-items-center botton"
                            style={{
                            color: "white",
                            width: "4rem",
                            height: "4rem",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            marginRight: '2vw'
                            }}
                            onClick={()=>getSize( "1")}>
                                1 ชิ้น
                            
                           </div>
                           <div id='sizebtn'role="button" className="rounded-circle  d-flex justify-content-center align-items-center botton"
                            style={{
                            color: "white",
                            width: "4rem",
                            height: "4rem",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            marginRight: '2vw'
                            }}
                            onClick={()=>getSize("6")}>
                                1 pack

                           </div>
                    </div>
                        <div className='submitbutton'>
                            <a type="button" className="btn btn-primary btn-lg btn-block bg-dark"
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