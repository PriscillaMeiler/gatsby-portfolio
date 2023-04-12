import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Card from '../../components/postcard'
import Header from '../../components/header'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <main>
      <Header></Header>
      <Layout pageTitle="Blog">
      {
        data.allMdx.nodes.map((node) => (
          <Link to={`/blog/${node.frontmatter.slug}`} style={{textDecoration: 'none' }} key={node.id}>
            <Card title={node.frontmatter.title} id={node.id} date={node.frontmatter.date}>
              <p>{node.excerpt}</p>
            </Card>
          </Link>
        ))
      }
      </Layout>
    </main>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage