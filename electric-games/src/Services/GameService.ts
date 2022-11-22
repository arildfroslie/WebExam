import axios from "axios";
import IGame from "../interfaces/IGame";

const GameService = (
    () => {
        const endpoints = {
            "Games": "https://localhost:7119/game",
        }
    
        const getGames = async () => {
            const response = await axios.get(endpoints.Games);
            console.log(response.data);
            return response.data;
        }

        const getGamesById = async (id: number) => {
            const response = await axios.get(`${endpoints.Games}/${id}`);
            console.log(response.data);
            return response.data;
        }
        
        const addGame = async (game: IGame) => {
            const response = await axios.post(endpoints.Games, game);
            console.log(response.data);
            return response.data;
        }

        const updateGame = async (game: IGame) => {
            const response = await axios.put(`${endpoints.Games}/${game.id}`, game);
            console.log(response.data);
            return response.data;
            
        }

        const deleteGame = async (id: number) => {
            const response = await axios.delete(`${endpoints.Games}/${id}`);
            console.log(response.data);
            return response.data;
        }


        return {
            getGames,
            getGamesById,
            addGame,
            updateGame,
            deleteGame

        }
}
)();
export default GameService;