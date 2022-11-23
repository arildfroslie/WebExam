import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GameProvider from './context/GameContext';
import PlatformProvider from './context/PlatformContext';
import CharacterProvider from './context/CharacterContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlatformProvider>
      <CharacterProvider>
      <GameProvider>
        <App />
      </GameProvider>
      </CharacterProvider>
      </PlatformProvider>
    </BrowserRouter>
  </React.StrictMode>
);
