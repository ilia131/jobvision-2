import Style from './Navbar.module.css'
import images from '../../assets'


const Navbar = () => {
  return (
    <header className={Style.header}>
         <div className={Style.header_container_box}>
            <div className={Style.header_container_box_right}>  
                <a href='#'className={Style.a_tag}>
                        <img src={images.jobpng2} width={107} height={27} />
                    </a>
                <section className={Style.header_container_box_right_box}>
                    <ul className={Style.header_container_box_right_box_ul}>
                         <li className={Style.li_span_1}>
                            <span className={Style.span_1}>
                                 <span className={Style.span_span_1}>
                                     <span>فر</span>
                                     <span>صت</span>
                                 </span>
                                 <span>های</span>
                            </span>
                            <span>شغلی</span>
                         </li>
                         <li>محصولات</li>
                         <li className={Style.li_span_2}>
                            <span className={Style.span_2}>
                                    <span className={Style.span_2_3}>ر</span>
                                    <span>ده</span>
                                    <span className={Style.span_2_4}>بندی</span>
                            </span>
                            <span className={Style.span_2_2}>
                                <span>شر</span>
                                <span className={Style.span_span_2_2}>کت</span>
                                <span>ها</span>
                            </span>
                         </li>
                         <li>رزومه ساز</li>    
                     </ul> 
                      <div className={Style.a_tag_2}>
                            <a href={'#'} >
                                <span className={Style.a_tag_2_span}>گز</span>
                                
                                <span className={Style.a_tag_2_span_2}>
                                    <span>ار</span>
                                    <span  className={Style.a_tag_2_span_span}>ش انتخاب رشته تحصیلی</span>
                                </span>
                            </a>
                         </div> 
                </section>
              
            </div>
            <div className={Style.header_container_box_left}>
                <div className={Style.header_container_box_left_box}>
                    <div className={Style.header_container_box_left_box_btn}>
                     <button>ورود | ثبت نام
                          <div className={Style.btn_img}>
                             <img src={images.signin} width={18}  height={18} />
                          </div>
                     </button>
                     </div>
                      {/* <div>|</div> */}
                     <div className={Style.a_tag_left}>
                         
                         <a href='#'>بخش کارفرمایان / ثبت آگهی</a>
                    </div>
                </div>
            </div>      
        </div>
    </header>
  )
}

export default Navbar