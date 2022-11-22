import { useEffect, useState, createContext, ReactNode } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGame from "../interfaces/IGame";
import GameService from "../services/GameService";


export const GameContext = createContext<IGameContext | null>(null);

type Props = {
    children: ReactNode
}

const GameProvider = ({children} : Props) => {
    const [games, setGames] = useState<IGame[]>([]);
    const [gameToEdit, setGameToEdit] = useState<IGame | null>(null);

    useEffect(()=>{
        getGamesFromService();
    }, [])

    const getGamesFromService = async () => {
        const gamesFromService = await GameService.getGames();
        setGames(gamesFromService);
    }
    
    const deleteGameById = async (id: number) => {
        await GameService.deleteGame(id);
    }

    const addGame = async (game: IGame) => {
        await GameService.addGame(game);
    }
    

    return(
        <GameContext.Provider value={{games, gameToEdit, setGameToEdit, deleteGameById, addGame}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;