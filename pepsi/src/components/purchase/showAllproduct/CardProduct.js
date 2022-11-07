import './CardProduct.css'

const CardProduct = (props)=>{
    const addData = () =>{
        const NewData = {
            name : props.name,
            picture : props.img,
            price : props.price,
            id : props.id,
            count : props.count,
            newPrice : props.price
        }
        props.getData(NewData)
    }

    return (
            <div className='card-product'  
            >
                    <div className='card h-100 shadow'  >
                        <img src={props.img} alt={props.img}className="pepsiImg" ></img>
                        <div className='card-body'>
                            <h5 className='card-title'>{props.name}</h5>
                            <p>{props.price}</p>    
                            <button className='btn btn-primary' onClick={()=>addData(props)}>add</button>
                        </div>
                    </div>
                </div>
        )}
export default CardProduct