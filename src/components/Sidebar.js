import React from 'react'
import profile from '../assets/image/profile.jpeg'

const Sidebar = () => {
    return (
        <div style={{ background: "", height: "100vh", width: "100%",overflow:"hidden",overflow:"auto" }}>
            <img
                src={profile}
                alt='deepak chauhan'
                width="120px"
                style={{ borderRadius: "50%", margin: "30px" }}
            />
            <hr style={{ backgroundColor: "black", height: "1px", borderWidth: "0", margin: "0 30px" }} />
            <p style={{ backgroundColor: "", margin: "20px 30px", textAlign: "start" }}>
                I am a React Full-stack developer passionate about providing modern, clean, and fully validated sites. Plus, I have a lot of experience in building minimum viable products for startups and helping them to build their teams. I've worked with JavaScript, React, and HTML5/CSS3.
                During my career,
            </p>
            <p style={{ backgroundColor: "", margin: "20px 30px", textAlign: "start" }}>
                I have worked as a full-stack developer, interfacing with databases including MySQL & MongoDB. I am adept at designing and consuming various styles of APIs, including REST & GraphQL.
                With my work and experience, I can help you with the development of web projects, from static websites like personal pages to complex web applications. I can also integrate the development of an ongoing web project, solo or being part of a team.
                Highlighted skills:  React,  Redux, HTML5, CSS3, and others.
            </p>
        </div>
    )
}

export default Sidebar