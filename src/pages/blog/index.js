import React, { useState } from 'react';
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Card from '../../components/postcard'
import Header from '../../components/header'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  const [state, setState] = useState({
    visible: false,
    desc: false,
  });
  const displayPosts = () => {
    setState({
      ...state,
      visible: !state.visible,
    });
  };
  const sortPosts = () => {
    setState({
      ...state,
      desc: !state.desc,
    });
  };
  if(state.visible) {
    if(state.desc) {
      return (
        <main>
          <Header></Header>
          <Layout pageTitle="Blog">
            <button onClick={displayPosts}>Hide Posts</button>
            <button onClick={sortPosts}>Unsort Posts</button>
          {
            data.sortedMdx.nodes.map((node) => (
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
    else {
      return (
        <main>
          <Header></Header>
          <Layout pageTitle="Blog">
            <button onClick={displayPosts}>Hide Posts</button>
            <button onClick={sortPosts}>Sort Posts</button>
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
  }
  else {
    return (
      <main>
        <Header></Header>
        <Layout pageTitle="Blog">
          <button onClick={displayPosts}>Show Posts</button>
        </Layout>
      </main>
    )
  }
}

export const query = graphql`
  query {
    allMdx: allMdx {
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
    sortedMdx: allMdx(sort: { frontmatter: { date: DESC } }) {
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