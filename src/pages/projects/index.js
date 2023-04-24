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
    designProjects: false,
  });
  const displayAll = () => {
    setState({
      ...state,
      allProjects: true,
      fedProjects: false,
      designProjects: false,
    });
  };
  const displayFed = () => {
    setState({
      ...state,
      allProjects: false,
      fedProjects: true,
      designProjects: false,
    });
  };
  const displayDesign = () => {
    setState({
      ...state,
      allProjects: false,
      fedProjects: false,
      designProjects: true,
    });
  };
  
  if(state.designProjects) {
    return (
      <main>
        <Header></Header>
        <Layout pageTitle="Projects">
          <div className="filter-buttons">
            <button onClick={displayAll}>All Projects</button>
            <button onClick={displayDesign} className="selected">Design Projects</button>
            <button onClick={displayFed}>Front-End Projects</button>
          </div>
          <div className='grid-container'>
            {
              data.designProjects.nodes.map((node) => (
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
            <button onClick={displayDesign}>Design Projects</button>
            <button onClick={displayFed} className="selected">Front-End Projects</button>
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
        <Layout pageTitle="Projects">
          <div className="filter-buttons">
            <button onClick={displayAll} className="selected">All Projects</button>
            <button onClick={displayDesign}>Design Projects</button>
            <button onClick={displayFed}>Front-End Projects</button>
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
    allProjects: allMdx(filter: {fields: {source: {eq: "projects" }}}) {
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
    designProjects: allMdx(
      filter: {fields: {source: {eq: "projects"}}, frontmatter: {category: {eq: "Design"}}}
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