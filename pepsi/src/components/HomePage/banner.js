import './banner.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
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
            <div className='right-container'>
                <Swiper className='banner-swiper'
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation={true}
                    pagination={{clickable: true}}
                    scrollbar={{ dragable: false }}
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
                            slidesPerView: 1,
                        },
                        1080: {
                            slidesPerView: 1,
                        },
                        1440: {
                            slidesPerView: 1,
                        },
                    }}
                >
                <SwiperSlide>
                    <div className='b-item-box'>
                        <img className='b-item-img' src="img_product\SPRITE WINTER SPICED CRANBERRY ZERO SUGAR.png" alt></img>
                        <h2 className='b-item-text'>SPRITE WINTER SPICED CRANBERRY ZERO SUGAR</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-item-box'>
                        <img className='b-item-img' src="img_product\SPRITE ZERO SUGAR.png"></img>
                        <h2 className='b-item-text'>SPRITE ZERO SUGAR</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-item-box'>
                        <img className='b-item-img' src="img_product\PEPSI ZERO SUGAR MANGO.png" alt></img>
                        <h2 className='b-item-text'>PEPSI ZERO SUGAR MANGO</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
        
    )
}

export default Banner