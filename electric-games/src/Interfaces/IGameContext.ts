import IGame from "./IGame";

interface IGameContext {
    games: IGame[];
    deleteGameById: (id: number) => void;
    addGame: (game: IGame) => void;
}

export default IGameContext;