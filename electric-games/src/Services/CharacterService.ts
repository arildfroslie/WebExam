import axios from "axios";
import ICharacter from "../interfaces/ICharacter";

const CharacterService = (
    () => {
        const endpoints = {
            "Characters": "https://localhost:7119/Character",
        }
    
       const getCharacters = async () => {
            const response = await axios.get(endpoints.Characters);
            console.log(response.data);
            return response.data;
        }

        const getCharacterById = async (id: number) => {
            const response = await axios.get(`${endpoints.Characters}/${id}`);
            console.log(response.data);
            return response.data;
        }
        
        const addCharacter = async (character: ICharacter) => {
            const response = await axios.post(endpoints.Characters, character);
            console.log(response.data);
            return response.data;
        }

        const updateCharacter = async (character: ICharacter) => {
            const response = await axios.put(`${endpoints.Characters}/${character.id}`, character);
            console.log(response.data);
            return response.data;
            
        }

        const deleteCharacter = async (id: number) => {
            const response = await axios.delete(`${endpoints.Characters}/${id}`);
            console.log(response.data);
            return response.data;
        }
    
        return {
            getCharacters,
            getCharacterById,
            addCharacter,
            updateCharacter,
            deleteCharacter
        }
}
)();
export default CharacterService;