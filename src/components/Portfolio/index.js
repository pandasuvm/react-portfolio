import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { motion } from 'framer-motion';
import projectsData from '../../data/projectsData'; // Importing project data
import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <motion.div
        className="portfolio-page"
        initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Slide into place
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="text-zone">
          <h1 className="titlep">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="portfolio-container">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="portfolio-box"
                initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                animate={{ opacity: 1, x: 0 }} // Slide into place
                whileHover={{ scale: 1.1, rotate: 0 }} // Smooth zoom on hover
                whileTap={{ scale: 0.95, rotate: 0 }} // Slightly shrink on click
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: index * 0.1, // Stagger the animations for each item
                  type: 'spring',
                  stiffness: 300,
                }}
                onClick={() => window.open(project.link, '_blank')}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
