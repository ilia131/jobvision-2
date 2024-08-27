import Style from './Banner.module.css'
import images from '../../../assets'
import { FaArrowLeftLong } from "react-icons/fa6";
import {  Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className={Style.Banner}>
        <div className={Style.Banner_container}>
            <div className={Style.Banner_container_right}>
                    <div className={Style.Banner_container_right_right}>
                         <h3 className={Style.Banner_container_right_right_h3}>استخدام‌های سراسری و دولتی</h3>
                         <p className={Style.Banner_container_right_right_p}>در  &#160;این قسمت، &#160;آخرین &#160;فرصت‌های &#160;استخدام سراسری&#160; و&#160; دولتی به‌&#160;طور
                            <br/>
                            مرتب به‌&#160;روزرسانی و منتشر  &#160;می‌شوند. به صفحه &#160;استخدام‌&#160;های سراسری 
                            <br/>
                            سر بزنید و از بررسی روزانه&#160; ده‌ها سایت و مرجع خبری دیگر بی‌نیاز شوید.
                         </p>
                         <div className={Style.Banner_a_tag_1}>
                            <a href='#'>مشاهده فرصت های شغلی </a>
                         </div>
                    </div>
                        <div className={Style.Banner_container_right_left}>
                        <img src={images.global} width={210} height={144}/>
                       </div>
                    </div>
                  <div className={Style.Banner_container_left}>
                     <div className={Style.Banner_container_left_box}>
                       <img 
                            className={Style.Banner_container_left_box_img1} 
                            src={images.employer}  
                         
                        /> 
                      <div className={Style.img_box}>   
                      <img 
                          src={images.shadow} 
                          height={105} 
                          width={145}/>     
                      </div> 
                       <div>   
                   </div>   
                    <div className={Style.Banner_container_left_box_down}>
                       <div className={Style.Banner_container_boxx}>   
                         <p>کار فرما هستید؟</p>
                          <div className={Style.Banner_container_boxx_a}>
                             <a href='#'>آگهی خود را ثبت کنید <FaArrowLeftLong className={Style.icons_1} /> </a>
                          </div>
                      </div>  
                    </div>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Banner