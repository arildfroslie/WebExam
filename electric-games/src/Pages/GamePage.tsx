import GameList from "../components/Game/GameList";
import Header from "../components/Header/Header";
import UpdateGame from "../components/UpdateFunction/UpdateGame";
import AddGame from "../components/AddFunction/AddGame";

const GamePage = () => {
    return(
        <>
            <Header />
            <GameList />
            <AddGame />
            <UpdateGame />
        </>
    )
}

export default GamePage;