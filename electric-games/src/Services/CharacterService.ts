import axios from "axios";

const CharacterService = (
    () => {
        const endpoints = {
            "Characters": "https://localhost:7119/character",
            "Character": "https://localhost:7119/character/{id}",
        }
    
        const getCharacters = async () => {
            const response = await axios.get(endpoints.Characters);
            return response.data;
        }
    
        return {
            getCharacters,
        }
}
)();
export default CharacterService;