import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <main>
      <Header></Header>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage