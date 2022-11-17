import CharacterList from "../components/Character/CharacterList";
import SearchFunction from "../components/SearchFunction/SearchFunction";
import Header from "../components/Header/Header";

const CharacterPage = () => {
    return(
        <>
            <Header />
            <SearchFunction />
            <CharacterList/>
        </>
    )
}

export default CharacterPage;