import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ColorInput from './components/ColorInput/ColorInput';
import ColorPalette from './components/ColorPalette/ColorPalette';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { generateColorSchemes } from './utils/colorUtils';
import './App.css';

function App() {
  const [primaryColor, setPrimaryColor] = useState('#007bff');
  const [colorSchemes, setColorSchemes] = useState([]);

  useEffect(() => {
    setColorSchemes(generateColorSchemes(primaryColor));
  }, [primaryColor]);

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color);
  };

  return (
    <div className="App">
      <Navbar title="Color Theme Generator" />
      <main className="container">
        <ColorInput
          value={primaryColor}
          onChange={handlePrimaryColorChange}
        />
        <ColorPalette schemes={colorSchemes} />
      </main>
      <About />
      <Footer />
    </div>
  );
}

export default App;