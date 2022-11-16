import './featured.css'
const Featured = ()=>{
    return(
        <div className='featured-container'>
            <div className='featured-top'>
                <div className='featured-text'>FEATURED BRAND</div>
            </div>
            <div className='featured-bot'>
                <div className='boxf schweppes'>
                    <img className='img-sch' src='img\schweppes.png' width="100%"></img>
                </div>
                <div className='boxf pepsi'>
                    <img src='img\pepsi.png' width="100%"></img>
                </div>
                <div className='boxf sprite'>
                    <img src='img\sprite.png' width="100%"></img>
                </div>
                <div className='boxf fanta'>
                    <img src='img\fanta.png' width="100%"></img>
                </div>
            </div>
            
        </div>  
    )
}
export default Featured