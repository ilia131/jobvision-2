import { useState } from "react";
import images from '../../../assets/image-company'
import { Swiper, SwiperSlide} from "swiper/react"
import SliderCard from "./SliderCard/SliderCard";
import 'swiper/css'
import 'swiper/css/navigation';
import './Slider.css'
import SwiperNavButton from "./SwiperNavButton/SwiperNavButton";
import {Autoplay , Navigation} from 'swiper/modules'


const Slider = () => {
    const [cardarray2, SetCardArray2] = useState([
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
        {logo:images.img1,name:'آرام نیا',star: '۲.۶',agahi: '۲'},
      
    ]);

  return (
    <section className='slider'>
       <div className='slider-box'>
        <Swiper
             slidesPerView={5}
             className='slider-box-item'
             spaceBetween={20}
             modules={[Navigation , Autoplay]}
             autoplay={{
              delay: 2500,
              disableOnInteraction: false,
             }}
          
        >
          
            {cardarray2.map((el, i) =>(
                <div key={i}>
                  <SwiperSlide>
                     <SliderCard  el={el} i={i}/>
                  </SwiperSlide>
                </div>
            ))}
           <SwiperNavButton />
        </Swiper>
       </div>
    </section>
  )
}

export default Slider