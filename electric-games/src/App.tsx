import "./css/General.css"
import "./css/Mobile.css"
import "./css/Tablet.css"

import {Navbar} from './components/Navbar/Navbar';
import Enter from "./components/EnterButton/Enter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Enter />
    <Footer />
    </>
  );
}

export default App;
