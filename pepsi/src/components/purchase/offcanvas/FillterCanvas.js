import Button from 'react-bootstrap/Button'
import { useState ,useEffect} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './FillterCanvas.css'
const FilterCanvas = (props)=>{
    const [showCount, setShowCount] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const newData =(data)=>{
        props.reciveData(data)
    
    }
    const delData = (data)=>{
        props.addData(data)
    }
    let  arCount = []
    let  arrCount = []
    let sum = 0
    arCount = props.newDataAdd.map(data =>
        data
      )
    
    arrCount = arCount.map(data =>
        data.count

    )
    for (let i = 0; i < arrCount.length; i+=1){
        sum += arrCount[i]
    }
    const [count, setCount] = useState(0)
    useEffect(()=>{
        if(props.newDataAdd.length > 0){
            setShowCount(true)
        }
        setCount(sum)
    },[sum])  

    return(
        <>
        <Button
                    style={{ width: "4rem", height: "4rem", position: "relative" , right: '1.5vw'}}
                    variant="outline-primary"
                    onClick={handleShow}
                    className='button-market'
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        style={{ color: "#242230"}}
                        >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        {showCount &&  <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            }}>
                            {count}
                        </div>}
                </Button>
                <Offcanvas show={show} onHide={handleClose} >
                    <Offcanvas.Header closeButton key={props.newDataAdd.id}>
                        <Offcanvas.Title>Your Items</Offcanvas.Title>
                        <button className='btn bg-primary' style={{marginLeft:'1vw', color:'white'}}>สั่งซื้อสิ้นค้า</button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    {props.newDataAdd.map(data =>(
                        <div className='card' key={data.id}>
                            <div className='row'>
                                <div className='big-cardOffcanvas'>
                                    <img src={data.picture}
                                       className='img-offcanvas'
                                    >
                                    </img>
                                        <div className='card-offcanvas'>
                                            <h5>{data.name}</h5>
                                            <h6>Price :{data.price} Bath</h6>
                                            <h6>จำนวน {data.count}</h6>
                                            <button className='btn bg-primary'  style={{color:'white', width: '2vw'}}onClick={()=>{
                                                newData(data)
                                            }}>-</button>
                                            <button className='btn bg-primary' style={{marginLeft:'1vw', color:'white'}} onClick={()=>{
                                                    delData(data)
                                            }}>+</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        </Offcanvas.Body>
                </Offcanvas>
    </>
    )
}
export default FilterCanvas