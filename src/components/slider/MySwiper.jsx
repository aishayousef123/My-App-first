import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import featured from '../../assets/images/featured.webp'
import featured2 from '../../assets/images/featured2.webp'
import featured3 from '../../assets/images/featured3.webp'
register();

const MySwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            
            width: 100px;
            height: 100px;
            color: white;
          }
          
          
          }
          
          
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false"> 
      <swiper-slide class="blue-slide"><img src={featured} alt='' className='featured' style={{width:"75%"}}/></swiper-slide>
      <swiper-slide class="yellow-slide"><img src={featured2} alt='' className='featured' style={{width:"75%"}}/></swiper-slide>
      <swiper-slide class="green-slide"><img src={featured3} alt='' className='featured' style={{width:"75%"}}/></swiper-slide>
    </swiper-container>
  );
};

export default MySwiper;