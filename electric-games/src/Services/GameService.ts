import axios from "axios";

const GameService = (
    () => {
        const endpoints = {
            "Games": "https://localhost:7119/game",
            "Game": "https://localhost:7119/game/{id}",
        }
    
        const getGames = async () => {
            const response = await axios.get(endpoints.Games);
            return response.data;
        }

        const getGamesById = async (id: number) => {
            const response = await axios.get(endpoints.Game.replace("{id}", id.toString()));
            return response.data;
        }
    
        return {
            getGames,
        }
}
)();
export default GameService;