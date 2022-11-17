import AddFunction from "../components/AddFunction/AddFunction";
import GameList from "../components/Game/GameList";
import Header from "../components/Header/Header";
import UpdateFunction from "../components/UpdateFunction/UpdateFunction";

const GamePage = () => {
    return(
        <>
            <Header />
            <GameList />
            <AddFunction />
            <UpdateFunction />
        </>
    )
}

export default GamePage;