import React from 'react';
import ColorList from './components/ColorList.js';
import AddColorForm from './components/AddColorForm';
import './App.css';

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}
