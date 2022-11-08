import axios from "axios";

const ElectricGamesService = (
    () => {
        const endpoints = {
            "games": "https://localhost:7119/Game",
        }
    
        const getAllGames = async () => { 
            const response = await axios.get(endpoints.games);
            return response.data.results;
        }

        return {
            getAllGames
        }
}
)();

export default ElectricGamesService;