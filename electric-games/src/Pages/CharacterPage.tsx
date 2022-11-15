import CharacterList from "../components/Character/CharacterList";
import SearchFunction from "../components/SearchFunction/SearchFunction";
import AddFunction from "../components/AddFunction/AddFunction";
import Header from "../components/Header/Header";

const CharacterPage = () => {
    return(
        <>
            <Header />
            <SearchFunction />
            <CharacterList/>
            <AddFunction />
        </>
    )
}

export default CharacterPage;