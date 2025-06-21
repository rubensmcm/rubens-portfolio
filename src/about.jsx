import React from 'react';
import Header from './header';
import Footer from './footer';
import './index.css';

const About = () => {
  return (
    <>
      <Header />

      <main>
        {/* About Hero */}
        <section className="hero-section about-hero">
          <div className="hero">
            <div className="hero-content">
              <h1>Hello, I'm Rubens</h1>
              <h3><span className="highlight">Building with Purpose</span></h3>
              <p>
                I’m a developer passionate about technology and design.<br/>
                Here’s my journey, what I create, and what drives me forward.
              </p>
            </div>
            <div className="sun-shape">
              <div className="sun-core"></div>
            </div>
          </div>
        </section>

        {/* Deep About Section */}
        <section className="about-section deeper-about">
          <div className="about-inner">
            <div className="about-left">
            <img src={`${process.env.PUBLIC_URL}/images/about-me.jpeg`} alt="Myself" className="about-img" />
            </div>
            <div className="about-right">
              <h2>About Me</h2>
              <p>
                I’m Rubens Marcolino, a Brazilian full-stack developer currently studying Software Engineering at Ensign College. My journey into tech started with a technical degree in Mechanics, and through hands-on experience I found a deep passion for creating digital solutions.
              </p>
              <p>
                I combine front-end aesthetics with back-end logic, using modern tools and languages to build responsive, accessible, and user-centered applications. I’m deeply curious, always learning, and committed to building tools that improve people’s lives.
              </p>
              <p>
                My work is about more than just writing code—it's about designing experiences, solving problems, and growing through collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <h2>My Mission</h2>
          <p>
            To craft clean, human-centered software that’s inclusive, efficient, and driven by real purpose.
          </p>
          <div className="values-list">
            <div className="value-item">
              <h3>Creativity</h3>
              <p>Transforming ideas into smooth, interactive interfaces with intention and style.</p>
            </div>
            <div className="value-item">
              <h3>Precision</h3>
              <p>Writing clean, maintainable code that solves real problems and scales with purpose.</p>
            </div>
            <div className="value-item">
              <h3>Growth</h3>
              <p>Continuously exploring, learning, and improving as both a developer and a human being.</p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="skills-section">
          <div className="skills-left">
            <h2>Technologies I Work With</h2>
            <div className="skills-icons">
  <div className="skills-row">
    <img src={`${process.env.PUBLIC_URL}/images/figma.svg`} alt="Figma" />
    <img src={`${process.env.PUBLIC_URL}/images/ps.svg`} alt="Photoshop" />
    <img src={`${process.env.PUBLIC_URL}/images/python.svg`} alt="Python" />
    <img src={`${process.env.PUBLIC_URL}/images/html.svg`} alt="HTML" />
    <img src={`${process.env.PUBLIC_URL}/images/c_plus.png`} alt="C++" />
  </div>
  <div className="skills-row-2">
    <img src={`${process.env.PUBLIC_URL}/images/jsx.svg`} alt="JSX" />
    <img src={`${process.env.PUBLIC_URL}/images/php.svg`} alt="PHP" />
    <img src={`${process.env.PUBLIC_URL}/images/css.svg`} alt="CSS" />
    <img src={`${process.env.PUBLIC_URL}/images/react.svg`} alt="React" />
    <img src={`${process.env.PUBLIC_URL}/images/vue.svg`} alt="Vue" />
  </div>
</div>
          </div>
          <div className="skills-right">
            <h3>Engineering with Empathy</h3>
            <p>
              My background in technical mechanics and software gives me a solid foundation to approach problems with both structure and creativity. I strive to balance usability, performance, and visual design in every project.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Let’s Connect</h2>
          <p className="contact-email">rubensmarcolino@mail.com</p>
          <a href="contact.html" className="btn-secondary">Send a Message</a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
