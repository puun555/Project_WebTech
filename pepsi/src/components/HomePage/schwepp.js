
import './schwepp.css'
const Schwepp = () =>{
    return(
        <section className = "schwepp-product">
            <div className='schwepp-header'>
                {/* <div>SPRAKLING WATER BEVERAGES</div> */}
            </div>
            <div id="gallery">
                <figure id="spinner" className='schwepp-item'>
                    <img src="img_product\SPRITE WINTER SPICED CRANBERRY ZERO SUGAR.png" alt></img>
                    <img src="img_product\PEPSI ZERO SUGAR MANGO.png" alt></img>
                    <img src="img_product\DIET PEPSI CAFFEINE FREE.png" alt></img>
                    <img src="img_product\FANTA BERRY.png" alt></img>
                    <img src="img_product\SCHWEPPES BITTER LEMON.png" alt></img>
                </figure>
            </div>
            <div className='schwepp-bottom'>
                {/* <h1>gear</h1> */}
            </div>
        </section>
    )
}

export default Schwepp