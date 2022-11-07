
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './schwepp.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Schwepp = () =>{
    return(
        <section className = "schwepp-product">
            <div className='schwepp-header'>
                {/* <div>SPRAKLING WATER BEVERAGES</div> */}
            </div>
            <div id="gallery" className='schwepp-item'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    centeredSlides
                    pagination={{clickable: true}}
                    scrollbar={{dragable: true}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide><img src="img_product\SPRITE WINTER SPICED CRANBERRY ZERO SUGAR.png" alt></img></SwiperSlide>
                    <SwiperSlide><img src="img_product\PEPSI ZERO SUGAR MANGO.png" alt></img></SwiperSlide>
                    <SwiperSlide><img src="img_product\DIET PEPSI CAFFEINE FREE.png" alt></img></SwiperSlide>
                    <SwiperSlide><img src="img_product\FANTA BERRY.png" alt></img></SwiperSlide>
                    <SwiperSlide><img src="img_product\SCHWEPPES BITTER LEMON.png" alt></img></SwiperSlide>
                </Swiper>
            </div>
            {/* <div id="gallery">
                <figure id="spinner" className='schwepp-item'>
                    <img src="img_product\SPRITE WINTER SPICED CRANBERRY ZERO SUGAR.png" alt></img>
                    <img src="img_product\PEPSI ZERO SUGAR MANGO.png" alt></img>
                    <img src="img_product\DIET PEPSI CAFFEINE FREE.png" alt></img>
                    <img src="img_product\FANTA BERRY.png" alt></img>
                    <img src="img_product\SCHWEPPES BITTER LEMON.png" alt></img>
                </figure>
                <a href="#" style={{float: 'left'}} onclick="galleryspin('-')">◀</a>
                <a href="#" style={{float: 'right'}} onclick="galleryspin('')">▶</a>
            </div> */}
            {/* <div className='schwepp-bottom'>
                <h1>gear</h1>
            </div> */}
            
        </section>
        
    )
}

export default Schwepp