import GameList from "../components/Game/GameList";
import Header from "../components/Header/Header";
import UpdateGame from "../components/UpdateFunction/UpdateGame";
import AddGame from "../components/AddFunction/AddGame";
import Footer from "../components/Footer/Footer";

const GamePage = () => {
    return(
        <>
            <Header />
            <GameList />
            <div className="add-update-container">
                <AddGame />
                <UpdateGame />
            </div>

            
        </>
    )
}

export default GamePage;