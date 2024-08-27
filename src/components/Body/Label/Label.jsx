import { useState } from "react"
import images from '../../../assets'
import Style from './Label.module.css'

const Label = () => {
  const [array1 , setArray1] = useState([
    {image:images.candidate, number:'+ ۳,۴۷۰,۰۰۰ ', name:'کارجوی همراه'},
    {image:images.company, number:'+ ۹۴,۶۰۰', name:'سازمان همراه'},
    {image:images.active, number:'+ ۴۴,۰۰۰', name:'موقعیت شغلی فعال'},
    {image:images.active1, number:'+ ۲۳۲,۰۰۰ ', name:'استخدام موفق'},
  ])
  return (
    <section className={Style.Label}>
        <div className={Style.Label_container}>
            <p>جاب‌ویژن، دستیار استخدامی شما</p>
            <div className={Style.Label_container_box}>
               {array1.map((item , index) =>(
                  <div key={index} className={Style.Label_container_box_el}>
                     <img src={item.image} alt={item.name} width={30} height={30}/>
                      <p>{item.number}</p>
                     <p>{item.name}</p>
                  </div>
               ))}
            </div>
        </div>
    </section>
  )
}

export default Label