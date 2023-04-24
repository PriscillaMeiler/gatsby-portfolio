import * as React from 'react'

import { 
  cardBlog,
  cardProject,
  dateStyles,
  heading,
  bgImage
} from './css-modules/card.module.scss'


const Card = ({ title, date, id, hover, children }) => {
  if(date) {
    return (
      <article key={id} className={cardBlog}>
        <h2 className={heading}>{title}</h2>
        <p className={dateStyles}>Posted in {date}</p>
        {children}
      </article>
    )
  } else {
    return (
      <>
        <article key={id} className={cardProject}>
          <h2 className={heading}>{title}</h2>
          {children}
        </article>
        <img src={hover} alt='teste' className={bgImage} />
      </>
    )
  }
}

export default Card