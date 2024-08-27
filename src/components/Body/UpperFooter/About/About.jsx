
import { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa6';

import Style from './About.module.css'


const About = ({el , i }) => {
    const [openside, setOpenSide] = useState(false)
    const openarrow = () =>{
      if (!openside) {
        setOpenSide(true)
      } else {
        setOpenSide(false)
      }
    }
  return (
    <div className={Style.note}>
        <div className={Style.note_about} onClick={openarrow}>
          {openside ? (
           <div>
             <div className={Style.upperfooter_arrow_1}>
                 <div className={Style.icons}><FaAngleUp className={Style.icons_2}/></div>  
                 <div><p>{el.title}</p></div>
              </div>
           </div>) : (
           <div className={Style.upperfooter_arrow}>
                 <div className={Style.icons}><FaAngleUp className={Style.icons_rotate} /></div>  
                 <div><p>{el.title}</p></div>
           </div>)}
           {openside && (
            <div className={Style.open_arrow_1}>
            <div className={Style.open_arrow}>
               <p>{el.subtitle}</p>
             </div>
            </div>
          )}
        </div>  
    </div>
  )
}

export default About