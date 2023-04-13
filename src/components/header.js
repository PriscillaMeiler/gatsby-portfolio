import React, { useState, useEffect } from 'react';
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

  const [state, setState] = useState({
    scrolled: false,
  });

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== state.scrolled) {
        setState({
          ...state,
          scrolled: !state.scrolled,
        });
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [state.scrolled]);
  
  return (
    <div className={headerContainer} data-active={state.scrolled}>
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