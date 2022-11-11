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

        console.log(getGames());
    
        return {
            getGames,
        }
}
)();
export default GameService;