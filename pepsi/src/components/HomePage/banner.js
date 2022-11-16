import './banner.css'
const Banner = ()=>{
    return(
        <div className='banner-container'>
            <div className='left-container'>
                <div className='top-quote'>KUMI SHOP</div>
                <div className='mid-quote'>
                    <div>NEED</div>
                    <div>SOME</div>
                    <div>DRINK?</div>
                </div>
                <div className='bot-quote'>
                    <div className='left-quote'>Fast delivery</div>
                    <div className='center-quote'>Agent prices</div>
                    <div className='right-quote'>Many products</div>
                </div>
            </div>
            <div className='right-container'></div>
        </div>
    )
}

export default Banner