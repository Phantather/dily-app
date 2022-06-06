import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from './Frame 119 (3).svg'
import img5 from './Frame 119 (4).svg'
import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import img3 from "./Frame 347.svg";
import img4 from "./Frame 347 (1).svg";
import img6 from "./Frame 592.svg";

const ServiceBanner = () => {
    return (
        <section className='service-banner'>
            <Swiper
                slidesPerView={1}
                spaceBetween={100}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                autoPlay={true}
                keyboard={true}
                navigation={false}
                modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><div className='banner__content'><div><img src={img2} alt="img"/></div></div></SwiperSlide>
                <SwiperSlide><div className='banner__content'><div><img src={img3} alt="img"/></div></div></SwiperSlide>
                <SwiperSlide><div className='banner__content'><div><img src={img4} alt="img"/></div></div></SwiperSlide>
                <SwiperSlide><div className='banner__content'><div><img src={img5} alt="img"/></div></div></SwiperSlide>
                <SwiperSlide><div className='banner__content'><div><img src={img6} alt="img"/></div></div></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default ServiceBanner;