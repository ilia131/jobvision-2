import Style from './Card.module.css'

const Card = ({item}) => {
  return (
    <section className={Style.Card}>
      <div className={Style.Card_box}>
        <div className={Style.Card_box_up}>
            <div className={Style.Card_box_up_img}>
               <img src={item.img} width={47} height={47}/>
            </div>
            <div className={Style.Card_box_up_text}>
               <p className={Style.Card_box_up_text_1}>{item.name}</p>
               <p className={Style.Card_box_up_text_2}>{item.name1}</p>
               <p className={Style.Card_box_up_text_3}>{item.locations}</p>
            </div>
        </div>
        <div className={Style.Card_box_down}> 
            <a href="#">ارسال رزومه</a>   
            <p>۲ روز پیش</p>
        </div>
      </div>
    </section>
  )
}

export default Card