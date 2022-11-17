import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import CharacterService from "../../services/CharacterService";
import ICharacter from "../../interfaces/ICharacter";
import SearchFunction from "../SearchFunction/SearchFunction";

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await CharacterService.getCharacters();
            setCharacters(characters);
        };
        fetchCharacters();
    }, []);

    const getCharacterItems = () => {
        return characters?.filter((characters) => {
            if(!searchTerm) {
                return true
            }
            return characters.name.toLowerCase().includes(searchTerm.toLowerCase())
        }).map( (character, i) => (
            <CharacterItem 
                key={`character-${i}`}
                id={character.id}
                name={character.name}
                image={character.image}
                game={character.game}
                description={character.description}
                />
        ) )
    }

    return(
        <>
            <SearchFunction onChange={setSearchTerm} />
            <section className="output-container">{ getCharacterItems() }</section>
        </>
    )
};

export default CharacterList;