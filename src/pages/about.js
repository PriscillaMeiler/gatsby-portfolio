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
      <Layout pageTitle="About Me" pageSummary="Here you'll find everything you need to know abou me and my career.">
        <div className="about-container">
          <div className="about-container__text">
            <h2>About My Life</h2>
            <p>Hi there! My name is Priscilla and I'm a Web Developer from Brazil. I'm 31 years old, I graduated in Digital Design, in 2017, and since then I've been working in this area. I love plain HTML, CSS and Vanilla JavaScript, but I have experience with Wordpress, Vue.js and I'm currently learning React.</p>
            <p>I love learning new things, and I think this field is the best for people like me, that are eager to learn, because it is always changing and updating. And there's always something new to learn.</p>
            <p>I'm a quick learner, and I like to pay attention to details. Because of that, sometimes I have to make some visual adjustments, and that's when I'm glad I had my Design degree.</p>
          </div>
          <div className="about-container__quote">
            <blockquote className="quote">
              <p>Always walk through life as if you have something new to learn and you will.</p>
            </blockquote>
          </div>
        </div>
        <div>
          <h2>About my Career</h2>
          <p>While in college, I had a few internships in Design. My first was in Lojas KD, an online furniture store, and my job was basically create and edit product pictures. After that, I worked at View Comunicação, with educational e-books. I was responsible for the layout and visuals. And my last Design Internship was at Grupo Polvo, and it was my first experience with social media content.</p>
          <p>As soon as I graduated, I decided that I wanted to go to Web Development, and I started at Evonline. I am super grateful, because I learned a lot there. I worked with Wordpress, so I learned HTML and CSS, basic PHP for Wordpress, SEO and content for blog posts.</p>
          <p>At the end of 2018, I had this amazing oportunity to work for <a href="https://coopers.pro/" target="_blank" rel="noreferrer">Coopers Digital Production</a>. In my point of view, this is where I really started to dive into web development. While in Evonline, I did a lot of web related tasks, but in Coopers I really started to create and develop full projects for websites.</p>
          <p>At Coopers, I learned a lot of JavaScript, SASS and how to create themes for Wordpress. We used <a href="https://get.foundation/" target="_blank" rel="noreferrer">Foundation</a>, and <a href="https://www.advancedcustomfields.com/" target="_blank" rel="noreferrer">Advanced Custom Fields</a>.</p>
          <p>A learned a lot in 1 year, but then, the pandemic started, and we had to start working from home, and I had this awesome opportunity to work at <a href="https://webcore.digital/" target="_blank" rel="noreferrer">Webcore Interactive</a>. At first, what caught my attention at Webcore, was their focus on teaching. They offered a weekly "lesson" in technology. It's called "TechTalk" and every friday, someone from the team can bring a topic related to Technology to teach something, or talk about something.</p>
          <p>I'm currently working at Webcore, and I can say, with confidence, that this was the best opportunity in my whole career yet. I learned Vue.js, a little bit of React, a LOOOOOT of JavaScript, and sometimes I had the opportunity to work not only for web, but for games (they have a company branch that work with games), Augmented Reality and Artificial Inteligence. With them, I work for clients like Ambev, Samsung, NuBank and others.</p>
        </div>
        <div className="about-container">
          <div className="about-container__quote">
            <blockquote className="quote">
              <p>The technology you use impresses no one. The experience you create with it is everything.</p>
            </blockquote>
          </div>
          <div className="about-container__text">
            <h2>So, finally, What do I do?</h2>
            <p>Basically, I have a lot of knowledge in HTML, CSS, SASS, JavaScript, Wordpress, Vue.js and Nuxt.</p>
            <p>I also have some knowledge in React, Gatsby, React Native, Cloud Computing, SQL, GraphQL and PHP.</p>
            <p>As for language skills, I'm fluent in both English and Portuguese. And I have basic reading skills in French. But I'm planning to go back to French lessons soon, and sometime in the future I also want to learn German and Italian.</p>
          </div>
        </div>
      </Layout>
      <Footer></Footer>
    </main>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage