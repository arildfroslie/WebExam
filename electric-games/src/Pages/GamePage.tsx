import AddFunction from "../components/AddFunction/AddFunction";
import GameList from "../components/Game/GameList";
import SearchFunction from "../components/SearchFunction/SearchFunction";

const GamePage = () => {
    return(
        <>
            <section className="header">
                <h2 className="header-title">Games</h2>
            </section>
            <SearchFunction />
            <GameList />
            <AddFunction />
        </>
    )
}

export default GamePage;