import Hero from "./Hero/Hero"
import Search from "./Search/Search"
import Cardcompany from "./Card-Company/Cardcompany"
import { Fragment } from "react"
import Slider from "./Slider/Slider"
import Banner from "./Banner/Banner"
import Label from "./Label/Label"
import Info from "./Info/Info"
import UpperFooter from "./UpperFooter/UpperFooter"


const Body = () => {
  return (
    <Fragment>
        <Hero /> 
        <Search />
        <Cardcompany />
        <Slider />
        <Banner />
        <Label />
        <Info />
        <UpperFooter />
    </Fragment>
  )
}

export default Body