import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from "./Item";
import vervebot from "../assets/image/vervebot.png"
import tryscrum from "../assets/image/tryscrum.png"
import materiallibrary from "../assets/image/materiallibrary.png"
import trybusinessagility from "../assets/image/trybusinessagility.png"
// import img_five from "../assets/image/img_five.png"
// import img_six from "../assets/image/img_six.jpg"


const Edu = () => {

     const data = [
          {
               img: tryscrum,
               content: "",
               url: "http://tryscrum.com"
          },
          {
               img: materiallibrary,
               content: "",
               url: "http://materiallibrary.com"
          },
          {
               img: vervebot,
               content: "",
               url: "http://vervebot.com"
          },
          {
               img: trybusinessagility,
               content: "",
               url: "https://trybusinessagility.com"
          },
          // {
          //      img:img_five,
          //      content:""
          // },
          // {
          //      img:img_six,
          //      content:""
          // }
     ]



     return (
          <Carousel itemPadding={[0, 0]} autoPlaySpeed={2500} showArrows={true} pagination={false} isRTL={true}>
               {data.map((item) => (
                    <>
                         <Item className="carousel-items" style={{ backgroundImage: `url(${item.img})` }}>
                         <a href={item.url} className="preview">Preview</a>
                         <div className="overlay"></div>
                         </Item>
                         
                    </>
               ))}
          </Carousel>
     )
}

export default Edu