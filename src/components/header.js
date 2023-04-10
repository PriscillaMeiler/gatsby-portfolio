import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { 
  headerContainer,
  navLinks,
  navLinkItem,
  navLinkText
} from './css-modules/layout.module.scss'


const Header = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  
  return (
    <div className={headerContainer}>
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
            <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}


export default Header