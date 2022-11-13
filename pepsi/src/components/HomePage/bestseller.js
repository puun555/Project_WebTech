
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './bestseller.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Bestseller = () => {
    return (
        <section className="bestseller-product">
            <div className="bestseller-upper">
                <div>BEST SELLER</div>
            </div>
            {/* <div className='bestseller-header'></div> */}
            {/* <div id="gallery" className='bestseller-item'> */}
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                centeredSlides={true}
                navigation={true}
                // pagination={{clickable: true}}
                scrollbar={{ dragable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 0,
                    },
                    350: {
                        slidesPerView: 1,

                    },
                    540: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1080: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\SPRITE WINTER SPICED CRANBERRY ZERO SUGAR.png" alt></img>
                        <h2 className='item-text'>SPRITE WINTER SPICED CRANBERRY ZERO SUGAR</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\SPRITE ZERO SUGAR.png"></img>
                        <h2 className='item-text'>SPRITE ZERO SUGAR</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\PEPSI ZERO SUGAR MANGO.png" alt></img>
                        <h2 className='item-text'>PEPSI ZERO SUGAR MANGO</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\DIET PEPSI CAFFEINE FREE.png" alt></img>
                        <h2 className='item-text'>DIET PEPSI CAFFEINE FREE</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\PEPSI ZERO SUGAR WILD CHERRY.png"></img>
                        <h2 className='item-text'>PEPSI ZERO SUGAR WILD CHERRY</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\FANTA BERRY.png" alt></img>
                        <h2 className='item-text'>FANTA BERRY</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\FANTA ORANGE.png"></img>
                        <h2 className='item-text'>FANTA ORANGE</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\SCHWEPPES BITTER LEMON.png" alt></img>
                        <h2 className='item-text'>SCHWEPPES BITTER LEMON</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item-box'>
                        <img className='item-img' src="img_product\SCHWEPPES SODA WATER.png"></img>
                        <h2 className='item-text'>SCHWEPPES SODA WATER</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* </div> */}
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

export default Bestseller