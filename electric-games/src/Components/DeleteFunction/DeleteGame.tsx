import { useContext} from "react";
import { GameContext } from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import { FC } from "react";
import IGame from "../../interfaces/IGame";

const DeleteGame: FC< Pick<IGame,"id">> = ({id}) => {
    const {games, deleteGameById} = useContext(GameContext) as IGameContext;

    const game = games.find(thisGame => {
        return thisGame.id === id;
    });

    const deleteGame = () => {
        if (window.confirm("Are you sure you want to delete: " + game?.name + "?")) {
            deleteGameById(id!)
            window.location.reload();
        }
    }

    return(
            <button className="delete-icon" onClick={deleteGame}>
                <i className="fa-regular fa-trash-can fa-xl"></i>
            </button>
    )
}

export default DeleteGame;