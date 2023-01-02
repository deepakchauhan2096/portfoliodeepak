import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from "./Item";
import img_one from "../assets/image/img_one.jpg"
import img_two from "../assets/image/img_two.jpg"
import img_three from "../assets/image/img_three.jpg"
import img_four from "../assets/image/img_four.jpg"
import img_five from "../assets/image/img_five.jpg"
import img_six from "../assets/image/img_six.jpg"

const Project = () => {
    return (
        <Carousel itemPadding={[0, 0]} enableAutoPlay autoPlaySpeed={2500} showArrows={true} pagination={false} >
            
            <Item style={{background:"violet"}}>
                 <img src={img_one} className="img_one" />  
            </Item>
            <Item style={{background:"violet"}}>
                 <img src={img_two} className="img_one" />  
            </Item>
            <Item style={{background:"violet"}}>
                 <img src={img_three} className="img_one" />  
            </Item>
            <Item style={{background:"violet"}}>
                 <img src={img_four} className="img_one" />  
            </Item>
            <Item style={{background:"violet"}}>
                 <img src={img_five} className="img_one" />  
            </Item>
            <Item style={{background:"violet"}}>
                 <img src={img_six} className="img_one" />  
            </Item>
        </Carousel>
    )
}

export default Project