import React from 'react'
import Navbar  from './Navbar'
import '../assets/css/layout.css'
import Sidebar from './Sidebar'
import Skill from './Skill'
import '../assets/css/style.css'
import Edu from './Edu'
import Project from './Project'


const Layout = () => {
    return (

        <div class="container-layout">
            <nav>
                <Navbar />
            </nav>
            <main><Edu /></main>
            <div id="sidebar"><Sidebar /></div>
            <div id="content1"><Skill /></div>
            <div id="content2"><Project /></div>
            <div id="content3">Content3</div>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout