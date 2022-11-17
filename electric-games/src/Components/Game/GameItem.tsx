import { FC } from "react";
import IGame from "../../interfaces/IGame";
import "./Game.css"

const GameItem: FC<IGame> = ({id, name, image, platform, genre, rating }) => {
    return (
        <article className="game-item">
            <h3>{name}</h3>
            <img className="game-image" src={`https://localhost:7119/images/Game/${image}`} alt={name} />
            <p>Platform: {platform}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}%</p>
        </article>
    );
};

export default GameItem;