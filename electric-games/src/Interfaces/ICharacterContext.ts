import ICharacter from "./ICharacter";

interface ICharacterContext {
    characters: ICharacter[];
    deleteCharacterById: (id: number) => void;
    addCharacter: (character: ICharacter) => void;
    characterToEdit: ICharacter | null;
    setCharacterToEdit: (character: ICharacter | null) => any;
    getCharacterById: (id: number) => void;
}

export default ICharacterContext;