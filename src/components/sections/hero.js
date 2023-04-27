import React from 'react';

// Images
import heroImage from '../../images/home-hero.png'

import { 
  heroHome,
  heroHomeContent,
  heroHomeImage
} from '../css-modules/sections.module.scss'


const Hero = () => {
  return (
    <section className={heroHome}>
      <div className={heroHomeContent}>
        <h1>Front-End Developer & Designer</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
      </div>
      <div className={heroHomeImage}>
        <img src={heroImage} alt={"Welcome to my site!"} />
      </div>
    </section>
  )
}


export default Hero