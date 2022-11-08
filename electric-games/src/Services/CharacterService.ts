import axios from "axios";

const CharacterService = (
    () => {
        const endpoints = {
            "characters": "https://localhost:7119/Character",
            "character": "https://localhost:7119/Character/{id}",
        }
    
        const getCharacters = async () => { 
            const response = await axios.get(endpoints.characters);
            return response.data.results;
        }
    
        const getCharacterById = async (id: number) => {
            const response = await axios.get(`${endpoints.character}/${id}`);
            return response.data.results;
        }
    
        const createCharacter = async (character: any) => {
            const response = await axios.post(endpoints.character, character);
            return response.data.results;
        }
    
        const updateCharacter = async (character: any) => {
            const response = await axios.put(endpoints.character, character);
            return response.data.results;
        }
    
        const deleteCharacter = async (id: number) => {
            const response = await axios.delete(`${endpoints.character}/${id}`);
            return response.data.results;
        }
    
        return {
            getCharacters,
            getCharacterById,
            createCharacter,
            updateCharacter,
            deleteCharacter
        }
}
)();
export default CharacterService;