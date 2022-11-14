import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import './ModalShow.css'
const  MyVerticallyCenteredModal = (props)=>{
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
                            }}>
                                1
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
                            }}>
                                3
                           </div>
                           <div id='sizebtn' role="button" className="rounded-circle d-flex justify-content-center align-items-center botton"
                            style={{ 
                            color: "white",
                            width: "4rem",
                            height: "4rem",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            marginRight: '2vw'
                            }}>
                                6
                           </div>
                    </div>
                        <div className='submitbutton'>
                            <a type="button" class="btn btn-primary btn-lg btn-block">Add To Cart</a>
                        </div>
                    </div>
            </div>
        </Container>
      </Modal.Body>
    </Modal>
    )
}
export default MyVerticallyCenteredModal