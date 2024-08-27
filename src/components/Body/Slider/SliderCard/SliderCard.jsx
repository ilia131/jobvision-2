import { CiStar } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import Style from './SliderCard.module.css'
import images from '../../../../assets'
const SliderCard = ({el , i}) => {
  return (
    <section className={Style.Slider_Card} >
         <div className={Style.Slider_Card_box}>
               <div className={Style.Slider_Card_box_up}>
                  <div className={Style.Slider_img}>
                   <img src={el.logo} width={50} height={50} />
                   </div>
                    <div className={Style.El_all}>
                       <p className={Style.name}>{el.name}</p>
                      <div className={Style.logo_1} >
                        <p>{el.star}</p>
                        <img  src={images.star} width={14} height={13}/>
                      </div>
                      <div className={Style.logo_2}>
                        <p className={Style.p_logo_2}><span>{el.agahi}</span><span>آگهی شغلی فعال</span></p>
                        <img src={images.arrow}/>
                   </div>
                  </div>
               </div>
               <div className={Style.Slider_Card_box_down}>
                 <a href="#">دنبال کنید +</a>
               </div>
         </div>
     </section>
  )
}

export default SliderCard