import IGame from "./IGame";

interface IGameContext {
    games: IGame[];
    deleteGameById: (id: number) => void;
    addGame: (game: IGame) => void;
    gameToEdit: IGame | null;
    setGameToEdit: (game: IGame | null) => any;
}

export default IGameContext;