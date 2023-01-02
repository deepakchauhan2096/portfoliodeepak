import React from 'react'
import Js from '../assets/image/js.png'
import Reactjs from '../assets/image/React.png'
import bootstrap from '../assets/image/Bootstrap.png'
import html from '../assets/image/html.png'
import css from '../assets/image/css.png'
import profile from '../assets/image/profile.jpeg'


const Skill = () => {

   const data = [
      {
         skill: "JavaScript",
         rank: "75%",
         bg: "violet"
      },
      {
         skill: "HTML/CSS",
         rank: "85%",
         bg: "indigo"
      },
      {
         skill: "React Js",
         rank: "80%",
         bg: "blue"
      },
      {
         skill: "Gatsby",
         rank: "80%",
         bg: "green"
      },


   ]

   return (
      <div style={{ background: "", height: "100vh", width: "100%", overflow: "hidden", overflow: "hidden", borderTop: "" }}>
         <h6 style={{ textAlign: "start", fontSize: "20px", padding: "10px 0px", margin: "0 30px" }} >Skills</h6>
         <hr style={{ backgroundColor: "black", height: "0.5px", borderWidth: "0", margin: "0 30px" }} />
         <div className='row px-4 py-4' style={{ display: "flex" }}>
            <div className='col-3'>
               <img src={Js} width={80} style={{ borderRadius: "10px" }} title="Java Scipt" />
            </div>
            <div className='col-3'>
               <img src={Reactjs} width={80} style={{ borderRadius: "10px" }} title="React Js" />
            </div>
            <div className='col-3'>
               <img src={bootstrap} width={80} style={{ borderRadius: "10px" }} title="Bootstrap" />
            </div>
            <div className='col-3'>
               <img src={html} width={80} style={{ borderRadius: "10px",background:"blue" }} title="HTML 5"  />
            </div>
         </div>
         <div className='row px-4 py-4' style={{ display: "flex" }}>
            <div className='col-3'>
               <img src={css} width={80} style={{ borderRadius: "10px" }} title="CSS 3"  />
            </div>
         </div>
      </div>
   )
}

export default Skill