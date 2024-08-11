import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            {/* <div className="about-left">

            </div> */}
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate and enthusiastic front-end developer with a knack for creating engaging and user-friendly web interface. i have strong foundation in HTML, CSS and JavaScript, along with modern frameworks like React.</p>
                    <p>I am enthusiastic about building engaging, user-friendly web application and continuously learning new technologies to enhance my skill set.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width:"56%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"68%"}}/></div>
                    <div className="about-skill"><p>MYSQL</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievments"></div>
    </div>
  )
}

export default About
