import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import CharacterService from "../../services/CharacterService";
import ICharacter from "../../interfaces/ICharacter";

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await CharacterService.getCharacters();
            setCharacters(characters);
        };
        fetchCharacters();
    }, []);

    const getCharacterItems = () => {
        console.log(characters)
        return characters?.map( (character, i) => (
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
        <section className="output-container">{ getCharacterItems() }</section>
    )
};

export default CharacterList;