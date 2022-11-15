import CharacterList from "../components/Character/CharacterList";
import SearchFunction from "../components/SearchFunction/SearchFunction";

const CharacterPage = () => {
    return(
        <>
            <section className="header">
                <h1 className="header-title">Characters</h1>
                <SearchFunction />
            </section>
            <CharacterList />
        </>
    )
}

export default CharacterPage;