import React, { useState } from 'react';
import './App.css';
import randomcolor from 'randomcolor';
import randomFont from 'random-font';

function App() {
  const [ fontColor, setFontColor ] = useState('black');
  const [ fontFamily, setFontFamily ] = useState('Comic Sans MS, cursive');
  const [ fontWeight, setFontWeight ] = useState('normal');
  const [ buttonColor, setButtonColor ] = useState(fontColor);

  const nameStyle = {
    color: fontColor,
    fontFamily: fontFamily,
    fontWeight: fontWeight
  };

  const buttonStyle = {
    color: buttonColor
  }

  const handleClick = () => {
    const newColor = randomcolor();
    const newFont = randomFont();
    const newWeight = 'bold';

    setFontColor(newColor);
    setFontFamily(newFont);
    setFontWeight(newWeight);
    setButtonColor(newColor);
  }

  return (
    <div className="App">
      <p id="name" style={nameStyle}>Pumpkin</p>
      <button id="beautifierBtn" onClick={handleClick} style={buttonStyle} >Beautify Name</button>
    </div>
  );
}

export default App;
