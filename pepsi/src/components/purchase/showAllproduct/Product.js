import Container  from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListProduct from "./ListProduct";
import CardProduct from "./CardProduct";
const Product = (props)=>{


    const reciveDataFormCardProduct = (data)=>{
        const enterData = {
            ...data
        }
       props.getFinalData(enterData)
    }
    return (
        <Container
            style={{paddingLeft: '3vw'}}
        >
             <Row >
                <Col sm={3}>
                    <ListProduct></ListProduct>
                </Col>
                <Col sm={8}>
                    <Row  className="row-product"
                    style={{marginTop :'5vw' , marginLeft: '3vw'}}
                    >
                    {props.items.map(item =>(
                        <CardProduct 
                        key = {item.id}
                        id = {item.id}
                        name ={item.name}
                        price = {item.price}
                        img = {item.img_product}
                        count = {item.count}
                        getData = {reciveDataFormCardProduct}
                        ></CardProduct>
                    ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Product