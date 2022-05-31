import React from 'react';
import img from './banner.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from './banner shops shops.svg'
import img5 from './2.svg'
import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import img3 from "./banner shops tarif.png";
import img4 from "./1.svg";
import img6 from "./4.svg";
import img7 from "./5.svg";

const Banner = () => {
    return (
        <section className='banner'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
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
                    <SwiperSlide><div className='banner__content'><div><img src={img} alt="img"/></div></div></SwiperSlide>
                    <SwiperSlide><div className='banner__content'><div><img src={img2} alt="img"/></div></div></SwiperSlide>
                    <SwiperSlide><div className='banner__content'><div><img src={img3} alt="img"/></div></div></SwiperSlide>
                    <SwiperSlide><div className='banner__content'><div><img src={img4} alt="img"/></div></div></SwiperSlide>
                    <SwiperSlide><div className='banner__content'><div><img src={img5} alt="img"/></div></div></SwiperSlide>
                    <SwiperSlide><div className='banner__content'><div><img src={img6} alt="img"/></div></div></SwiperSlide>
                    <SwiperSlide><div className='banner__content'><div><img src={img7} alt="img"/></div></div></SwiperSlide>
                </Swiper>
        </section>
    );
};

export default Banner;