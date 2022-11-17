import { Link, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, CharacterPage, PlatformPage } from "../../pages";

import "./Navbar.css";

export const Navbar = () => {
    return (
    <>
      <nav className="nav">
        <a href="/" className="logo">Electric Games</a>
        <ul className="navbar">
          <li><Link to="Home">Home</Link></li>
          <li><Link to="Game">Games</Link></li>
          <li><Link to="Character">Characters</Link></li>
          <li><Link to="Platform">Platforms</Link></li>
        </ul>
       </nav>
      <Routes>
        <Route path="Home" element={ <HomePage/> }></Route>
        <Route path="Game" element={ <GamePage/> }></Route>
        <Route path="Character" element={ <CharacterPage/> }></Route>
        <Route path="Platform" element={ <PlatformPage/> }></Route>
      </Routes>
    </>
        
    );
}