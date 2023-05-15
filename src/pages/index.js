import * as React from "react"
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'
import Header from '../components/header'
import Card from '../components/postcard'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Skills from '../components/sections/Skills'
import ContactForm from '../components/sections/contact'
import Footer from '../components/footer'
import "../styles/index.scss"

const IndexPage = ({ data }) => {
  return (
    <main>
      <Header></Header>
      <div className="gradient-background-all">
        <div className="gradient-background"></div>
        <Hero />
        <About />
      </div>
      <Skills />
      <section className="section-work">
        <h2 className="section-work__title">Work</h2>
        <p>Check out some of the awesome stuff I made!</p>
        
        <div className="section-work__cards">
        {
          data.allMdx.nodes.map((node) => (
            <Link to={`/projects/${node.frontmatter.slug}`} style={{textDecoration: 'none' }} className={node.frontmatter.card_size} key={node.id}>
              <Card title={node.frontmatter.title} id={node.id} hover={node.frontmatter.hover_image.publicURL}>
                <p>{node.excerpt}</p>
              </Card>
            </Link>
          ))
        }
        </div>
        <div className="section-work__button">
          <Link to="/projects" className="button">More</Link>
        </div>
      </section>
      <ContactForm /> 
      <Footer></Footer>
    </main>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {fields: {source: {eq: "projects" }}}
      limit: 5
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          hover_image {
            publicURL
          }
          card_size
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage