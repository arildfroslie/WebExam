import { FC, useContext } from "react";
import IGame from "../../interfaces/IGame";
import DeleteFunction from "../DeleteFunction/DeleteGame";
import scrollFunction from "../ScrollFunction/ScrollFunction";
import { GameContext } from "../../context/GameContext";

const GameItem: FC<IGame> = ({id, name, image, platform, genre, rating }) => {
    const gameContext = useContext(GameContext);

    return (
        <article className="output-item">
            <h3>{name}</h3>
            <img className="output-image" src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>Platform: {platform}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}%</p>
            
            <DeleteFunction id={id}/>
            <button className="icon"  onClick={() =>
                {
                    scrollFunction("update-game")
                    gameContext?.setGameToEdit({id, name, image, platform, genre, rating})
                }}>
                <i className="fa-regular fa-pen-to-square fa-xl"></i>
        </button>
        </article>
    );
};

export default GameItem;
