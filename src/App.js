import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ColorInput from './components/ColorInput/ColorInput';
import ColorPalette from './components/ColorPalette/ColorPalette';
import { generatePalette, generatePaletteFromBackground } from './utils/colorUtils';
import './App.css';

function App() {
  const [primaryColor, setPrimaryColor] = useState('#007bff');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [palette, setPalette] = useState([]);

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color);
    setPalette(generatePalette(color));
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
    setPalette(generatePaletteFromBackground(color));
  };

  return (
    <div className="App">
      <Navbar title="Color Theme Generator" />
      <main className="container">
        <section className="color-inputs">
          <ColorInput
            label="Primary Color"
            value={primaryColor}
            onChange={handlePrimaryColorChange}
            type="primary"
          />
          <ColorInput
            label="Background Color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            type="background"
          />
        </section>
        <ColorPalette colors={palette} />
      </main>
    </div>
  );
}

export default App;