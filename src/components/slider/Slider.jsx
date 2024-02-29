import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import featured from '../../assets/images/featured.webp'
import featured2 from '../../assets/images/featured2.webp'
import featured3 from '../../assets/images/featured3.webp'

function Slider() {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
     >
    <SwiperSlide></SwiperSlide>
    <SwiperSlide> <img src={featured} alt='' className='featured' style={{width:"50%"}}/></SwiperSlide>
    <SwiperSlide><img src={featured2} alt='' className='featured2' style={{width:"50%"}}/></SwiperSlide>
    <SwiperSlide><img src={featured3} alt='' className='featured3' style={{width:"50%"}}/></SwiperSlide>
  </Swiper>
  )
}

export default Slider