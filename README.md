

---

# **React Portfolio 🚀**



Welcome to my **React Portfolio** project! This is a dynamic and interactive developer portfolio showcasing my skills, projects, and experience. Built with modern web technologies, it’s designed to provide a smooth, immersive experience for potential employers, collaborators, and anyone interested in my work.

---

## 🚩 **Table of Contents**

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Technologies Used](#-technologies-used)
- [Setup Instructions](#-setup-instructions)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ **Features**

### 1. **Dynamic Content**
   - **Single Page Application (SPA)**: Seamlessly navigate between sections without page reloads.
   - **Animated Letters**: Enhance the user experience with engaging text animations.

### 2. **Responsive Design**
   - Fully responsive across all devices (desktop, tablet, mobile).
   - Conditional rendering for mobile views, with certain elements like the SVG logo hidden to optimize space.

### 3. **Modern UI/UX**
   - **Framer Motion**: Smooth transitions and animations for an enhanced visual experience.
   - **Three.js**: 3D elements that add depth to the portfolio, making it stand out.

### 4. **Interactive Elements**
   - **Particles.js Integration**: Attractive particle backgrounds that react to user interaction.
   - **Pacman Loader**: Fun loading animations using `react-loaders`.

### 5. **Customizable Components**
   - All key data and content are stored in a single `data.js` file, making it easy to customize and update without digging into the code.
   - Includes sections like **Projects**, **About Me**, **Contact**, with easy-to-modify templates.

### 6. **Contact Form**
   - Integrated with **Email.js** to allow direct contact through the website.
   - Includes validation and feedback animations to ensure users have a smooth experience.

### 7. **Downloadable Resume**
   - **Resume Download**: A dedicated button to download my resume in PDF format.

### 8. **Project Showcase**
   - A separate section dedicated to showcasing my projects with a consistent color code, 3D style, and Pacman loader for loading states.

---

## 🌍 **Live Demo**

Check out the live version of this portfolio [here](https://suvm-portfolio.netlify.app).

---

## 🛠 **Technologies Used**

- **React.js**: A JavaScript library for building user interfaces.
- **Sass**: CSS preprocessor to make styling more efficient.
- **Framer Motion**: For smooth animations and transitions.
- **Three.js**: To create 3D elements.
- **react-tsparticles**: Particle backgrounds for a more engaging experience.
- **react-router-dom**: For navigation between different sections.
- **Email.js**: To handle contact form submissions directly from the portfolio.

---

## 🚀 **Setup Instructions**

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pandasuvm/react-portfolio.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-portfolio
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open your browser:**

   Go to `http://localhost:3000` to view the portfolio.

---

## 🗂 **Project Structure**

Here's a brief overview of the project structure:

```
react-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/            # Image assets
│   ├── components/
│   │   ├── AnimatedLetters/   # Text animations
│   │   ├── Contact/           # Contact form component
│   │   ├── Home/              # Home page component
│   │   ├── Logo/              # Logo component
│   │   ├── ParticlesComponent/ # Particles.js component
│   ├── data.js                # Centralized data file
│   ├── App.js                 # Main App component
│   ├── index.js               # Entry point for the React app
├── README.md                  # Project documentation
├── package.json               # Project metadata and dependencies
```

---

## 🎨 **Customization**

- **Update Personal Information**: Modify `data.js` to update your name, job title, and other personal details.
- **Add Projects**: Add or update projects in the `data.js` file.
- **Change Animations**: Modify animation settings in the components like `AnimatedLetters`, `Framer Motion` settings in `App.js`, etc.
- **Styling**: All styles are written in SCSS and can be easily customized in the `index.scss` file.

---

## 🤝 **Contributing**

Contributions are welcome! If you find any issues or have ideas for improvements, feel free to create an issue or submit a pull request.

1. **Fork the repository.**
2. **Create a new branch:** `git checkout -b feature/your-feature-name`.
3. **Commit your changes:** `git commit -m 'Add some feature'`.
4. **Push to the branch:** `git push origin feature/your-feature-name`.
5. **Open a pull request.**

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 📧 **Contact**

If you have any questions or want to get in touch, feel free to reach out via [email](mailto:suvm.personal@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/pandasuvm/).

---

