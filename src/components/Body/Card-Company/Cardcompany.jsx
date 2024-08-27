
import { useState } from 'react'
import Style from './Cardcompany.module.css'
import images from '../../../assets/image-company'
import Card from './Card/Card'
import { FaArrowLeftLong } from "react-icons/fa6";

const Cardcompany = () => {
  const [cardarray ,SetCardArray] = useState([
    {name:'Business Line Owner',name1:'اسنپ فود',locations:'تهران زعفرانیه',img:images.img1},
    {name:'Business Line Owner',name1:'اسنپ فود',locations:'تهران زعفرانیه',img:images.img1},
    {name:'Business Line Owner',name1:'اسنپ فود',locations:'تهران زعفرانیه',img:images.img1},
    {name:'Business Line Owner',name1:'اسنپ فود',locations:'تهران زعفرانیه',img:images.img1},
    {name:'Business Line Owner',name1:'اسنپ فود',locations:'تهران زعفرانیه',img:images.img1},
    {name:'Business Line Owner',name1:'اسنپ فود',locations:'تهران زعفرانیه',img:images.img1},
  ])
  return (
    <section className={Style.Card_company}>
         <p className={Style.Card_company_container_p} >  
                        تازه ترین آگهی های شغلی برای شما
         </p>   
         <div className={Style.Card_company_container}>         
            <div className={Style.Card_company_container_box}>
               <div className={Style.Card_company_container_img_text}>
                    <img src={images.logo2} />
                    <p>مشاغل پیشنهادی</p>
              </div>
         </div>
         <div className={Style.Card_company_container_down}>
            <p>
             پیشنهاد شده بر اساس رفتار و عملکرد شما
            </p>
            <div className={Style.Card_company_container_down_card}>
              {cardarray.map((item, index)=>(
                <div key={index}  >
                  <Card item={item} index={index}/>
                </div>
               ))}
             </div>
           
         </div>
             
        </div> 
           <div className={Style.Card_company_a}>
                <a>مشاهده همه    <FaArrowLeftLong className={Style.Card_company_icons} /></a>
             </div>
    </section>
  )
}

export default Cardcompany