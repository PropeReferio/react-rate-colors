import React, { useState } from 'react';
import colorData from "./data/color-data.json";
import ColorList from './components/ColorList.js';
import AddColorForm from './components/AddColorForm';
import { v4 } from 'uuid';
import './App.css';

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          setColors(newColors);
        }}
      />
      <ColorList 
        colors={colors}
        onRateStar={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
            );
            setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);  // Makes a copy of colors, using filter, that does not include
          // the color with the ID of the color to be removed, and sets that as the state var colors.
        }} 
      />
    </>
  );
}
