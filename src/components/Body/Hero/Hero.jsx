import Style from './Hero.module.css'
import images from '../../../assets'
const Hero = () => {

  return (
    <section className={Style.hero}>
         <div className={Style.hero_container}>
            <div className={Style.hero_container_left}>
                  <img src={images.banner}/>
            </div>
            <div className={Style.hero_container_right}>
                <p>
              
                     <span className={Style.hero_span_number}>                
                        ۴۴,۳۳۲ 
                      </span> 
                      
                         آگهی استخدام
                   
                   
                    <br/>
                    در <span className={Style.hero_span_number}>۴۰۰</span> شهر
                </p>
            </div>
         </div>
    </section>
  )
}

export default Hero