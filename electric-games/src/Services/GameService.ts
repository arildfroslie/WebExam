import axios from "axios";
import IGame from "../interfaces/IGame";

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

        const postGame = async (game: IGame) => {
            const response = await axios.post(endpoints.Games, game);
            return response.data;
        }

        const updateGame = async (editedGame: IGame) => {
            const response = await axios.put(endpoints.Game.replace("{id}", editedGame.id.toString()), editedGame);
            return response.data;
        }
    
        return {
            getGames,
            getGamesById,
            postGame,
            updateGame
        }
}
)();

export default GameService;
