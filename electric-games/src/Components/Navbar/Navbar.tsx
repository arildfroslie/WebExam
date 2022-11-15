import { Link, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, CharacterPage, PlatformPage } from "../../pages";

import "./Navbar.css";

export const Navbar = () => {
    return (
    <>
      <nav className="nav">
        <a href="/" className="logo">Electric Games</a>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="Games">Games</Link></li>
          <li><Link to="Characters">Characters</Link></li>
          <li><Link to="Platforms">Platforms</Link></li>
        </ul>
       </nav>
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="Games" element={ <GamePage/> }></Route>
        <Route path="Characters" element={ <CharacterPage/> }></Route>
        <Route path="Platforms" element={ <PlatformPage/> }></Route>
      </Routes>
    </>
        
    );
}