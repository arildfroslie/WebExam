import { useState, useContext, ChangeEvent } from "react";
import { GameContext } from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import { FC } from "react";
import IGame from "../../interfaces/IGame";

const DeleteFunction: FC< Pick<IGame,"id">> = ({id}) => {
    const {games, deleteGameById} = useContext(GameContext) as IGameContext;

    const deleteGame = () => {
        if (window.confirm("Are you sure you want to delete this?")) {
            deleteGameById(id)
            window.location.reload();
        }
    }

    return(
            <button className="delete-btn" onClick={deleteGame}>
                <i className="fa-solid fa-trash fa-xl" />
            </button>
    )
}

export default DeleteFunction;