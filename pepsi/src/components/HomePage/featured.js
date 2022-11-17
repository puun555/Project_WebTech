import './featured.css'
const Featured = ()=>{
    return(
        <div className='featured-container'>
            <div className='featured-top'>
                <div className='featured-text'>FEATURED BRAND</div>
            </div>
            <div className='featured-bot'>
                <div className='boxf schweppes'>
                    <img className='fimg' src='img\schweppes.png' width="80%"></img>
                </div>
                <div className='boxf pepsi'>
                    <img className='fimg' src='img\pepsi.png' width="80%"></img>
                </div>
                <div className='boxf sprite'>
                    <img className='fimg' src='img\sprite.png' width="80%"></img>
                </div>
                <div className='boxf fanta'>
                    <img className='fimg' src='img\fanta.png' width="80%"></img>
                </div>
            </div>
            
        </div>  
    )
}
export default Featured