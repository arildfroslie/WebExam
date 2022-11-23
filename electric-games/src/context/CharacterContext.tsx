import { useEffect, useState, createContext, ReactNode } from "react";
import ICharacterContext from "../interfaces/ICharacterContext";
import ICharacter from "../interfaces/ICharacter";
import CharacterService from "../services/CharacterService";


export const CharacterContext = createContext<ICharacterContext | null>(null);

type Props = {
    children: ReactNode
}

const CharacterProvider = ({children} : Props) => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [characterToEdit, setCharacterToEdit] = useState<ICharacter | null>(null);

    useEffect(()=>{
        getCharactersFromService();
    }, [])

    const getCharactersFromService = async () => {
        const charactersFromService = await CharacterService.getCharacters();
        setCharacters(charactersFromService);
    }
    
    const deleteCharacterById = async (id: number) => {
        await CharacterService.deleteCharacter(id);
    }

    const addCharacter = async (character: ICharacter) => {
        await CharacterService.addCharacter(character);
    }
    

    return(
        <CharacterContext.Provider value={{characters, characterToEdit, setCharacterToEdit, deleteCharacterById, addCharacter}}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider;