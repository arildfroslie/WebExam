import { Link, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, CharacterPage, PlatformPage } from "../../pages";

export const Navbar = () => {
    return (
    <>
      <nav className="nav">
        <a href="Home" className="logo">Electric Games</a>
        <ul className="navbar">
          <li><Link to="Home"><i className="fa-solid fa-house"></i><h4 className="nav-title">Home</h4></Link></li>
          <li><Link to="Game"><i className="fa-solid fa-gamepad fa-fw"></i><h4 className="nav-title">Games</h4></Link></li>
          <li><Link to="Character"><i className="fa-solid fa-hand-fist"></i><h4 className="nav-title">Characters</h4></Link></li>
          <li><Link to="Platform"><i className="fa-brands fa-playstation"></i><h4 className="nav-title">Platforms</h4></Link></li>
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