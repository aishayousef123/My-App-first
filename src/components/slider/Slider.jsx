import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
//import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import featured from '../../assets/images/featured.webp'
import featured2 from '../../assets/images/featured2.webp'
import featured3 from '../../assets/images/featured3.webp'

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
           spaceBetween={50}
           //effect="fade"
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       <SwiperSlide> <img src={featured} alt='' className='featured' style={{width:"75%"}}/></SwiperSlide>
    <SwiperSlide><img src={featured2} alt='' className='featured2' style={{width:"75%"}}/></SwiperSlide>
    <SwiperSlide><img src={featured3} alt='' className='featured3' style={{width:"75%"}}/></SwiperSlide>
  </Swiper>
  )
}

export default Slider