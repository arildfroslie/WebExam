import { FC, useContext } from "react";
import IGame from "../../interfaces/IGame";
import DeleteFunction from "../DeleteFunction/DeleteGame";
import scrollFunction from "../ScrollFunction/ScrollFunction";
import { GameContext } from "../../context/GameContext";

const GameItem: FC<IGame> = ({id, name, image, platform, genre, rating }) => {
    const gameContext = useContext(GameContext);

    return (
        <article className="output-item">
            <h3 className="output-header">{name}</h3>
            <img className="output-image" src={`https://localhost:7119/images/${image}`} alt={name} />
            <p className="output-p">Platform: {platform}</p>
            <p className="output-p">Genre: {genre}</p>
            <p className="output-p">Rating: {rating}%</p>
        
            <DeleteFunction id={id}/>
                <button className="edit-icon"  onClick={() =>
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
