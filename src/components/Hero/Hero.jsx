import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <h1><span>Hi, I'm Amit</span></h1>
      <p>A Frontend focused Web development building the frontend of Website and Web Application that leads to success of the overall Product.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
