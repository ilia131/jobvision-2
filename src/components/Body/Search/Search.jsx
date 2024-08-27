import {Field, Form , Formik} from 'formik'
import Style from './Search.module.css'
import images from '../../../assets'
const Search = () => {

   const onSumbit = (values) => {
     console.log(values)
   }



  return (
    <section className={Style.search_section}>
        <p>
         <span className={Style.search_section_span_1}>
            <span>دنبال چه شغلی</span>
        </span>
         <span className={Style.search_section_span_2}>
            <span>می</span>
            <span>گردید؟</span>
         </span>
        </p>
        <Formik 
          onSubmit={(values) => onSumbit(values)} 
          initialValues={{title:"", city:"",jobs:""}}
          className={Style.search}
        >
           <Form className={Style.search_form}>  
             <div className={Style.search_form_input_1}>
              <div className={Style.search_img}>
                 <img src={images.search} width={20} height={20}/>
              </div>
              <Field
                 className={Style.search_form_field_1} 
                 type="text" 
                 name="title" 
                 placeholder="...عنوان شغلی یا شرکت"
              />
            
             </div>
             <div className={Style.search_form_input_2}>
              <div className={Style.search_img}>
                 <img src={images.search} width={20} height={20}/>
              </div>
              <Field
                className={Style.search_form_field_2} 
                type="text"  
                name="jobs" 
                placeholder="گروه شغلی"
                disabled
              />
              </div >
              <div className={Style.search_form_input_2}>
              <div className={Style.search_img}>
                 <img src={images.search} width={20} height={20}/>
              </div>
              <Field 
                className={Style.search_form_field_3} 
                type="text"  
                name="city" 
                placeholder="شهر"
              />
              </div>
        
                <button type="submit" className={Style.search_form_btn}>جستجو در مشاغل</button>
           
           </Form>
        </Formik>
    </section>
  )
}

export default Search