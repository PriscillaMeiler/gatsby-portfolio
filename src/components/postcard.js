import * as React from 'react'
import { Link } from 'gatsby'

import { 
  card,
  dateStyles,
  heading
} from './css-modules/card.module.scss'


const Card = ({ title, date, id, children }) => {
  return (
    <article key={id} className={card}>
      <h2 className={heading}>{title}</h2>
      <p className={dateStyles}>Posted in {date}</p>
      {children}
    </article>
  )
}

export default Card