import React from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import './index.css';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <>
    <Header />
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="projects-section"
      >
        <section>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <motion.div className="project-card" variants={cardVariants}>
              <img src="./images/example.png" alt="Become Solid project" />
              <div className="project-info">
                <h3 className="project-title">Become Solid</h3>
                <span className="see-more">see more</span>
                <p className="project-description">
                  Become Solid is a robust platform designed to help users solidify their knowledge through interactive learning modules.
                </p>
              </div>
            </motion.div>

            <motion.div className="project-card" variants={cardVariants}>
              <img src="./images/example2.png" alt="Solare Skateball project" />
              <h3>Solare Skateball</h3>
            </motion.div>

            <motion.div className="project-card" variants={cardVariants}>
              <img src="./images/example.png" alt="Become Solid project" />
              <div className="project-info">
                <h3 className="project-title">Become Solid</h3>
                <span className="see-more">see more</span>
                <p className="project-description">
                  Become Solid is a robust platform designed to help users solidify their knowledge through interactive learning modules.
                </p>
              </div>
            </motion.div>

            <motion.div className="project-card" variants={cardVariants}>
              <img src="./images/example.png" alt="Become Solid project" />
              <div className="project-info">
                <h3 className="project-title">Become Solid</h3>
                <span className="see-more">see more</span>
                <p className="project-description">
                  Become Solid is a robust platform designed to help users solidify their knowledge through interactive learning modules.
                </p>
              </div>
            </motion.div>
          </div>

          <a href="#all-projects" className="btn-primary">View All Works</a>
        </section>
      </motion.main>

    <Footer />
    </>
  );
};

export default Projects;
