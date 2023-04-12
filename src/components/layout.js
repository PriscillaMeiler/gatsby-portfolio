import * as React from 'react'

import { 
  container,
  heading
} from './css-modules/layout.module.scss'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout