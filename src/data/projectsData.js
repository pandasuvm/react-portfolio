// src/data/projectsData.js

const project1Image = require('../assets/images/project1.png'); // Importing image
const project2Image = require('../assets/images/project2.png'); // Importing image
const project3Image = require('../assets/images/project3.png'); // Importing image

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Frontend',
    description: 'A fully responsive and interactive frontend for an e-commerce website. Features include product listings, search functionality, and a user-friendly checkout process. Built with modern web technologies to ensure a seamless shopping experience.',
    technologies: [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'React'
    ], 
    image: project1Image, // Use the imported image
    link: 'https://suvm-ecom.netlify.app', // Replace with your actual link
  },
  {
    id: 2,
    title: 'Student Lifecycle Management System',
    description: 'A comprehensive Student Lifecycle Management System developed using React.js. The system provides functionalities for tracking attendance, managing timetables, and monitoring student progress through a user-friendly interface.',
    technologies: [
      'React.js', 
      'HTML', 
      'CSS'
    ], 
    image: project2Image, // Use the imported image
    link: 'https://suvm-slcm.netlify.app', // Replace with your actual link
  },
  {
    id: 3,
    title: 'SolarMapper',
    description: 'SolarMapper is an advanced solar energy estimation tool that uses AI and machine learning algorithms to predict the cost and efficiency of solar installations. It leverages data such as geographic heat values (GHV) to provide accurate estimations. Developed with Python, PyTorch, and other essential technologies for robust performance.',
    technologies: [
      'AI', 
      'Machine Learning', 
      'Python', 
      'PyTorch', 
      'Data Analysis'
    ], 
    image: project3Image, // Use the imported image
    link: 'https://your-solar-mapper-project-link.com', // Replace with your actual link
  },
  // Add more projects as needed
];

export default projectsData;
