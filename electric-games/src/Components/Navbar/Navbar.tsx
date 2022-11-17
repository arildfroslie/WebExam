import { Link, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, CharacterPage, PlatformPage } from "../../pages";


import "./Navbar.css";

export const Navbar = () => {
    return (
    <>
      <nav className="nav">
        <a href="/" className="logo">Electric Games</a>
        <ul className="navbar">
          <li><Link to="Home"><i className="fa-solid fa-house"></i> Home</Link></li>
          <li><Link to="Game"><i className="fa-solid fa-gamepad fa-fw"></i> Games </Link></li>
          <li><Link to="Character"><i className="fa-solid fa-hand-fist"></i> Characters</Link></li>
          <li><Link to="Platform"><i className="fa-brands fa-playstation"></i>Platforms</Link></li>
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