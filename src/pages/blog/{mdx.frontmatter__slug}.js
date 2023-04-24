import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Seo from '../../components/seo'
import "../../styles/index.scss"
import "../../styles/blog.scss"


const BlogPost = ({data, children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <div className="blogpost">
      <Header></Header>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <p className="blogpost-date">{data.mdx.frontmatter.date}</p>
        {children}
      </Layout>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost