import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contacts';
import Portfolio from './components/Portfolio';
import CustomCursor from './components/CustomCursor'; // Import the Custom Cursor

function App() {
  return (
    <>
      <CustomCursor /> {/* Include the custom cursor */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
