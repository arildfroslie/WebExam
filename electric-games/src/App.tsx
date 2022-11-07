import { Link, Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import GamePage from './Components/Pages/GamePage';
import CharacterPage from './Components/Pages/CharacterPage';
import './App.css';


function App() {
  return (

    <div>
      <BrowserRouter>
        <nav>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="Games">Games</Link></li>
            <li><Link to="Characters">Characters</Link></li>
          </ul>
        </nav>
      
        <Routes>
          <Route path="/" element={ <HomePage/> }></Route>
          <Route path="Games" element={ <GamePage/> }></Route>
          <Route path="Characters" element={ <CharacterPage/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
