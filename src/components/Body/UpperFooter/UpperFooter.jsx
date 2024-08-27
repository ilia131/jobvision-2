import {useState} from 'react'

import About from './About/About';
import Style from './UpperFooter.module.css'


const UpperFooter = () => {
  
  const [paarray, SetPaArray]= useState([
    {
      title: "مورد اعتماد بهترین سازمان‌های ایران",
      subtitle:"دسترسی به بهترین موقعیت‌های کاریابی و مشاهده فرصت‌های استخدام معتبرترین سازمان‌های ایران از جمله مهم‌ترین مزیت‌های سایت کاریابی جاب ویژن است."
    },
    {
      title: "هوشمندترین سیستم پیشنهاد و اطلاع‌رسانی شغل",
      subtitle:"سایت کاریابی جاب ویژن با استفاده از هوش مصنوعی (AI)، عملکرد شما را در سیستم رصد کرده و بر همین اساس، آگهی‌های استخدام مرتبط را از طریق پنل کاربری، ایمیل، ربات تلگرام و در برخی موارد پیامک و نوتیفیکشن به شما پیشنهاد می‌دهد."
    },
    {
      title:"رزومه ساز دوزبانه و استاندارد",
      subtitle:"رزومه اولین برخورد کارفرما با توانمندی‌های شماست و به جای شما با کارفرما حرف می‌زند! با استفاده از رزومه ساز رایگان و آنلاین جاب ویژن، رزومه‌ای حرفه‌ای و استاندارد و در عین حال زیبا برای خود بسازید. نکته منحصربفرد این رزومه ساز، ساخت همزمان رزومه انگلیسی، همزمان با تکمیل اطلاعات به فارسی است."
    },
    {
      title:"سیستم هوشمند انطباق",
      subtitle:"سیستم هوشمند انطباق به شما کمک می‌کند میزان سازگاری رزومه خود با شاخص‌های استخدام مدنظر کارفرما را ببینید و برای موقعیت‌هایی که شانس استخدام بالاتری دارید، رزومه بفرستید."
    },
    {
      title:"خودشناسی با کمک تست های استاندارد",
      subtitle:"قبل از اینکه به دنبال فرصت‌های استخدام مناسب بگردید باید خود را بشناسید. سایت استخدام جاب ویژن به کمک معتبرترین تست‌ها و با ارائه‌ی گزارش‌های تحلیلی به شما کمک می‌کند به شناخت دقیق‌تری از ویژگی‌های شخصیتی، علائق شغلی، هوش هیجانی (EQ) و سایر جنبه‌های هوش خود مثل حل مسئله، قدرت تحلیل و استدلال برسید."
    },
    {
      title:"بستری برای ملاقات با مدیران شرکت ها در نمایشگاه کار",
      subtitle:"جاب‌ویژن برگزارکننده بزرگترین نمایشگاه‌های کار در کشور است.سازمانها در این رویداد به دنبال ارتقای برند کارفرمایی خود و استخدام بهترین استعدادهای بازار کار هستند پس فرصت مناسبی برای نیروی متخصص فراهم شده تا اطلاعات کافی از سازمانها کسب کرده و شانس خود را برای استخدام شدن در آنها امتحان کنند."
    },
    {
      title:"امکان معرفی کامل خود به کارفرما",
      subtitle:"در سایت استخدامی جاب ویژن می‌توانید علاوه بر رزومه، اطلاعات بیشتری از خود به کارفرما ارائه کنید تا شانس استخدام بالاتری داشته باشید. نتیجه تست‌‌های خودشناسی، نمونه کار، معرفی صوتی، تلفن تماس مدیران و همکاران سابق و نیز نامه اختصاصی برای سازمان‌ها، از جمله امکاناتی هستند که به کمک آن‌ها می‌توانید خود و توانمندی‌هایتان را بهتر به کارفرما معرفی کنید."
    },
    {
      title:"قوی‌ترین شبکه‌های اجتماعی در بین سایت‌های کاریابی ایرانی",
      subtitle:"جاب ویژن در شبکه‌های اجتماعی نیز حضور فعالی دارد و بیش از 400 هزار متخصص و کارجو، صفحه جاب ویژن در لینکدین، تلگرام، اینستاگرام و توییتر را دنبال می‌کنند."
    },
    {
      title:"همکاری با بهترین موسسات آموزشی ایران در توانمندتر شو",
      subtitle:"هرچه مهارت‌های بیشتری داشته باشید در موقعیت‌های شغلی بهتری می‌توانید استخدام شوید. سایت کاریابی جاب ویژن با همکاری بهترین موسسات آموزشی کشور، دوره‌های آموزشی مفید و کاربردی را به شما معرفی می‌کند. پس از شرکت در این دوره‌ها، مدالی در کنار رزومه شما قرار می‌گیرد که باعث تمایز شما از سایر کارجویان می‌شود؛ به این ترتیب، می‌توانید در رقابت کاریابی پیروز شده و در موقعیت شغلی بهتری استخدام شوید."
    },
  ])
   


  return (
    <div className={Style.upperfooter}>
        <p className={Style.upperfooter_text}>چرا جاب ویژن؟</p>
        <div className={Style.upperfooter_about}>
        {paarray.map((el, i) =>(
          <div className={Style.upperfoote}>
             <About el={el} i={i} key={i + 1} />
          </div>
        ))}
        </div>
        <div className={Style.upperfooter_account}>
              <p>زندگی شغلی رویایی خود را با جاب ویژن بسازید <br/> <span className={Style.upperfooter_span}>از آخرین فرصت‌های شغلی معتبرترین شرکت‌های ایران باخبر شده و در آنها استخدام شوید.</span></p>
              <a href='#'>ثبت نام کنید</a>
        </div>
    </div>
  )
}

export default UpperFooter