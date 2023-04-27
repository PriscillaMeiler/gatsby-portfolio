import React from 'react';

// Images
import fedIcon from '../../images/FED-icon.png'
import desIcon from '../../images/DES-icon.png'

import { 
  skillsHome,
  skillsCards,
  skillsCard,
} from '../css-modules/sections.module.scss'


const Skills = () => {
  return (
    <section className={skillsHome}>
      <div className={skillsCards}>
        <div className={skillsCard}>
          <img src={fedIcon} alt={"Front-End Developer Icon"} />
          <h3><span className="hide">I am a </span>Front-End Developer</h3>
          <p>Being a Front-End Developer is my true passion. I love being able to write stuff and having things magically appearing on the web.</p>
          <p className="lead">Languages</p>
          <p>HTML, CSS, JavaScript, Vue.js, React.js, PHP and more!</p>
        </div>
        <div className={skillsCard}>
          <img src={desIcon} alt={"Designer Icon"} />
          <h3><span className="hide">But also a </span>Designer</h3>
          <p>This is where I can give wings to my imagination and bringing what's on my mind to the real world. Also, I like making things prettier.</p>
          <p className="lead">Tools</p>
          <p>Adobe Photoshop, Adobe Illustrator, Figma, Sketch and more!</p>
        </div>
      </div>
    </section>
  )
}


export default Skills