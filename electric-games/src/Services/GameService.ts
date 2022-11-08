import axios from "axios";

const GameService = (
    () => {
        const endpoints = {
            "Games": "https://localhost:7119/Game",
            "Game": "https://localhost:7119/Game/{id}",
        }
    
        const getGames = async () => { 
            const response = await axios.get(endpoints.Games);
            return response.data.results;
        }
    
        const getGameById = async (id: number) => {
            const response = await axios.get(`${endpoints.Game}/${id}`);
            return response.data.results;
        }
    
        const createGame = async (Game: any) => {
            const response = await axios.post(endpoints.Game, Game);
            return response.data.results;
        }
    
        const updateGame = async (Game: any) => {
            const response = await axios.put(endpoints.Game, Game);
            return response.data.results;
        }
    
        const deleteGame = async (id: number) => {
            const response = await axios.delete(`${endpoints.Game}/${id}`);
            return response.data.results;
        }
    
        return {
            getGames,
            getGameById,
            createGame,
            updateGame,
            deleteGame
        }
}
)();
export default GameService;