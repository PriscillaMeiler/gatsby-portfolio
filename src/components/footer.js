import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Images
import brandImage from '../images/placeholder_brand.png'

import { 
  footerContainer,
  brandFooter,
  navFooter,
  textFooter
} from './css-modules/footer.module.scss'
import { faEnvelope, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';


const Footer = ({ pageTitle, children }) => {
  return (
    <div className={`page-footer ${footerContainer}`}>
      <footer>
        <div className={brandFooter}>
          <img src={brandImage} alt={"My Brand"} />
        </div>
        <nav className={navFooter}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/priscilla-meiler/" target="_blank" rel="noreferrer" title="My LinkedIn Profile">
                <FontAwesomeIcon icon={faAddressCard} inverse size="lg" />
              </a>
            </li>
            <li>
              <a href="https://github.com/PriscillaMeiler/" target="_blank" rel="noreferrer" title="My GitHub Profile">
                <FontAwesomeIcon icon={faCodeBranch} inverse size="lg" />
              </a>
            </li>
            <li>
              <a href="mailto:primeiler@gmail.com" target="_blank" rel="noreferrer" title="Send me an email">
                <FontAwesomeIcon icon={faEnvelope} inverse size="lg" />
              </a>
            </li>
          </ul>
        </nav>
        <p className={textFooter}>Made By Priscilla Meiler</p>
      </footer>
    </div>
  )
}


export default Footer