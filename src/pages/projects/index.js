import React, { useState } from 'react';
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Card from '../../components/postcard'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Seo from '../../components/seo'

import "../../styles/projects.scss"

const ProjectsPage = ({ data }) => {
  const [state, setState] = useState({
    allProjects: true,
    fedProjects: false,
    wordpressProjects: false,
  });
  const displayAll = () => {
    setState({
      ...state,
      allProjects: true,
      fedProjects: false,
      wordpressProjects: false,
    });
  };
  const displayFed = () => {
    setState({
      ...state,
      allProjects: false,
      fedProjects: true,
      wordpressProjects: false,
    });
  };
  const displayWordpress = () => {
    setState({
      ...state,
      allProjects: false,
      fedProjects: false,
      wordpressProjects: true,
    });
  };
  
  if(state.wordpressProjects) {
    return (
      <main>
        <Header></Header>
        <Layout pageTitle="Projects">
          <div className="filter-buttons">
            <button onClick={displayAll}>All Projects</button>
            <button onClick={displayWordpress} className="selected">CMS Integration</button>
            <button onClick={displayFed}>Vue/React</button>
          </div>
          <div className='grid-container'>
            {
              data.wordpressProjects.nodes.map((node) => (
                <Link to={`/projects/${node.frontmatter.slug}`} style={{textDecoration: 'none' }} key={node.id}>
                  <Card title={node.frontmatter.title} id={node.id} hover={node.frontmatter.hover_image.publicURL}>
                    <p>{node.excerpt}</p>
                  </Card>
                </Link>
              ))
            }
          </div>
        </Layout>
        <Footer></Footer>
      </main>
    )
  }
  else if(state.fedProjects) {
    return (
      <main>
        <Header></Header>
        <Layout pageTitle="Projects">
          <div className="filter-buttons">
            <button onClick={displayAll}>All Projects</button>
            <button onClick={displayWordpress}>CMS Integration</button>
            <button onClick={displayFed} className="selected">Vue/React</button>
          </div>
          <div className='grid-container'>
            {
              data.fedProjects.nodes.map((node) => (
                <Link to={`/projects/${node.frontmatter.slug}`} style={{textDecoration: 'none' }} key={node.id}>
                  <Card title={node.frontmatter.title} id={node.id} hover={node.frontmatter.hover_image.publicURL}>
                    <p>{node.excerpt}</p>
                  </Card>
                </Link>
              ))
            }
          </div>
        </Layout>
        <Footer></Footer>
      </main>
    )
  }
  else {
    return (
      <main>
        <Header></Header>
        <Layout pageTitle="Projects" pageSummary="Here you'll find a few of the projects I worked on.">
          <div className="filter-buttons">
            <button onClick={displayAll} className="selected">All Projects</button>
            <button onClick={displayWordpress}>CMS Integration</button>
            <button onClick={displayFed}>Vue/React</button>
          </div>
          <div className='grid-container'>
            {
              data.allProjects.nodes.map((node) => (
                <Link to={`/projects/${node.frontmatter.slug}`} style={{textDecoration: 'none' }} key={node.id} className={node.frontmatter.card_size}>
                  <Card title={node.frontmatter.title} id={node.id} hover={node.frontmatter.hover_image.publicURL}>
                    <p>{node.excerpt}</p>
                  </Card>
                </Link>
              ))
            }
          </div>
        </Layout>
        <Footer></Footer>
      </main>
    )
  }
}

export const query = graphql`
  query {
    allProjects: allMdx(
      filter: {fields: {source: {eq: "projects" }}}
      sort: {frontmatter: {order: ASC}}
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
    fedProjects: allMdx(
      filter: {fields: {source: {eq: "projects"}}, frontmatter: {category: {eq: "Front-End Development"}}}
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
    wordpressProjects: allMdx(
      filter: {fields: {source: {eq: "projects"}}, frontmatter: {category: {eq: "Wordpress"}}}
      ) {
        nodes {
          frontmatter {
          date(formatString: "MMMM D, YYYY")
          card_size
          hover_image {
            publicURL
          }
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Projects" />

export default ProjectsPage