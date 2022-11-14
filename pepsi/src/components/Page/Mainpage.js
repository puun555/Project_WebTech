import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterProduct from './Buypage,js/FilterProduct';
import ShowItem from './ShowItem';
import Cart from './Cart';
import './Mainpage.scss'
import items from './products.json'
import { useState , useEffect} from 'react'
const MainPage = (props)=>{
    const [FilteredItems,  setFilteredItems] = useState(items)
    const getFilterText = (data) =>{
        const BigText = data.toUpperCase()
        if(BigText == 'ALL'){
            setFilteredItems(items)
        }
        const filterData =items.filter((dummy)=>{
            return dummy.name.includes(BigText)
        })
        if(filterData.length > 0){
            setFilteredItems(filterData)
        }
    }
    
    return(
        <Container >
            <div className='top-mainpage'>
                <div className='lef-mainpage'>
                    <a>All Product</a>
                    <h1>SHOP: DRINKING</h1>
                    <a>30 PRODUCT</a>
                </div>
                <div className='right-mainpage'>
                    <div className='search-bar'>
                        <form  role="search">
                            <label for="search">Search for stuff</label>
                            <input id="search" type="search" placeholder="Search..." autofocus required />
                            <button>Go</button>  
                        </form>
                    </div>  
                    <Cart></Cart>

                </div>
            </div>
            <Row xs={0}>
                <Col md={3} ><FilterProduct getFilter={getFilterText}></FilterProduct></Col>
                <Col md={9}><ShowItem data={FilteredItems}></ShowItem></Col>
            </Row>
        </Container>
    )
}
export default MainPage 