import './ShowItem.css'
import Container from 'react-bootstrap/esm/Container'
import Cardproduct from './Card'
const ShowItem = (props) =>{
    return(
        <Container className="Show-itembox">
            <div className='ali-item'>
                {props.data.map(data=>(
                    <Cardproduct datas={data} key={data.id}></Cardproduct>
                ))}
            </div>
        </Container>
    )
}
export default ShowItem