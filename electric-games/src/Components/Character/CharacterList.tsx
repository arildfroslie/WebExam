import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import CharacterService from "../../Services/CharacterService";
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
        <section>
            <h1>Her kommer Characters</h1>
            <section>{ getCharacterItems() }</section>
        </section>
    )
};

export default CharacterList;