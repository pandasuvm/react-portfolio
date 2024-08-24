import { useEffect, useState } from 'react';
import './CustomCursor.scss';
import PacmanImage from '../assets/images/pacman.png'; // Adjust the path as needed

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundImage: `url(${PacmanImage})`,
      }}
    />
  );
};

export default CustomCursor;
