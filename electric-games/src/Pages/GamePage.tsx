import AddFunction from "../components/AddFunction/AddFunction";
import GameList from "../components/Game/GameList";
import Header from "../components/Header/Header";

const GamePage = () => {
    return(
        <>
            <Header />
            <GameList />
            <AddFunction />
        </>
    )
}

export default GamePage;