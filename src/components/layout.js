import * as React from 'react'

import { 
  container,
  heading,
  titleHeader,
  titleHeaderContent
} from './css-modules/layout.module.scss'

const Layout = ({ pageTitle, pageSummary, children }) => {
  return (
    <div className="page-content">
      <div className={titleHeader}>
        <div className={titleHeaderContent}>
          <h1 className={heading}>{pageTitle}</h1>
          <p>{pageSummary}</p>
        </div>
      </div>
      <div className={container}>
        {children}
      </div>
    </div>
  )
}

export default Layout