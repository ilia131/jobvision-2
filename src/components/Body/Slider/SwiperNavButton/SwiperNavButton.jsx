
import { useSwiper } from "swiper/react"
import './SwiperNavButton.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const SwiperNavButton = () => {
  const swiper = useSwiper()
  return (
    <section className='swaper-btn'>
         
          <button className="swiper_btn_1" onClick={() => swiper.slidePrev()}><IoIosArrowRoundBack /></button>
          <button className="swiper_btn_2" onClick={() => swiper.slideNext()}><IoIosArrowRoundForward /></button>
       
    </section>
  )
}

export default SwiperNavButton