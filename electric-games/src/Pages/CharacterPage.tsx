import CharacterList from "../components/Character/CharacterList";
import Header from "../components/Header/Header";
import AddCharacter from "../components/AddFunction/AddCharacter";
import UpdateCharacter from "../components/UpdateFunction/UpdateCharacter";

const CharacterPage = () => {
    return(
        <>
            <Header />
            <CharacterList/>
            <div className="add-update-container">
                <AddCharacter />
                <UpdateCharacter />
            </div>
        </>
    )
}

export default CharacterPage;