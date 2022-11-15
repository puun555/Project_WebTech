import Button from 'react-bootstrap/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OffCanvas.css'
const MyOffcanvas = (props)=>{
    const DelData = (data)=>{
        props.Deldata(data)
    }
    const AddData= (data)=>{
        props.addData(data)
    }
    return(
        <Offcanvas show={props.show} onHide={props.onHide} placement='end'>
        <Offcanvas.Header>
            <h1>Your Items</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {props.data.map(data=>(
                <div key={data.id}>
                    <hr></hr>
                    <div className='box-offCanvas'>
                        <div className='left-offCanvas'>
                        
                            <img src={data.pic}></img>
        
                        </div>
                        <div className='right-offCanvas'>
                            <h5>{data.name}</h5>
                            <p>{data.price} บาท</p>
                            <p>{data.count} ขิ้น</p>
                            <div className='button-pack'>
                                <a type="button" className="btn btn-primary btn-xs btn-block bg-dark" onClick={()=>AddData(data)}>+</a>
                                <a type="button" className="btn btn-primary btn-xs btn-block bg-dark" onClick={()=>DelData(data)}>-</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    )
}
export default MyOffcanvas