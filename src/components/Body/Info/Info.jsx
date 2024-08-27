import Style from './Info.module.css'
import images from '../../../assets'


const Info = () => {

  return (
    <section className={Style.info}>
      <div className={Style.info_container}>   
            <div  className={Style.info_container_box}>
                <div className={Style.info_container_box_box}>
                  <div className={Style.info_img} >
                    <img src={images.multi}/>
                  </div>
                  <div className={Style.info_container_box_box_text}>
                    <div className={Style.info_container_box_box_text_1}>
                     <p>رزومه ساز جاب ویژن</p>
                     <span>رزومه ای استاندارد به دو زبان فارسی و انگلیسی بسازید.</span>
                    </div>
                    <div className={Style.info_a_tag}>
                      <a href='#'>ساخت رزومه</a>
                    </div>
                  </div>
                 </div>
                 <div className={Style.info_container_box_box}>
                  <div className={Style.info_img} >
                    <img src={images.salary}/>
                  </div>
                  <div className={Style.info_container_box_box_text}>
                    <div className={Style.info_container_box_box_text_1} >
                    <p>ماشین حساب حقوق و دستمزد</p>
                    <span>از حقوق دریافتی افراد در مشاغل مختلف آگاه شوید و تخمین دقیق تری از حقوق منصفانه خود داشته باشید.</span>
                    </div>
                    <div className={Style.info_a_tag_1}>
                      <a href='#'>حقوق خود را محاسبه کنید</a>
                    </div>
                 </div>
               </div>
           </div> 
         
      </div>
    </section>
  )
}

export default Info