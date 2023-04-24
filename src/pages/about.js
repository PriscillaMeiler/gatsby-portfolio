import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Seo from '../components/seo'
import "../styles/about.scss"

// Images
import imagePlaceholder from '../images/portfolio-placeholder.jpg'

const AboutPage = () => {
  return (
    <main>
      <Header></Header>
      <Layout pageTitle="About Me">
        <div className="about-container">
          <div>
            <h2>About My Life</h2>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
          </div>
          <div>
            <blockquote className="quote">
              <p>blockquoted text goes here</p>
            </blockquote>
          </div>
        </div>
        <div>
          <h2>Who am I?</h2>
          <p>Here is the first paragraph about my life. When did all of this started? Here is the first paragraph about my life. When did all of this started? Here is the first paragraph about my life. When did all of this started? Here is the first paragraph about my life. When did all of this started? Here is the first paragraph about my life. When did all of this started? Here is the first paragraph about my life. When did all of this started?</p>
          <p>Here is the second paragraph about my life. Why did all of this started?</p>
          <p>Here is the third paragraph about my life. Where's all of this going to?</p>
        </div>
        <div className="about-container">
          <div>
            <img src={imagePlaceholder} alt={"Placeholder"} />
          </div>
          <div>
            <h2>So, finally, What do I do?</h2>
            <p>Here is the first paragraph about my life. When did all of this started?</p>
            <p>Here is the second paragraph about my life. Why did all of this started?</p>
            <p>Here is the third paragraph about my life. Where's all of this going to?</p>
        </div>
        </div>
      </Layout>
      <Footer></Footer>
    </main>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage