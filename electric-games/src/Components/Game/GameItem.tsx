import { FC } from "react";
import IGame from "../../interfaces/IGame";
import "../../css/Game.css";

const GameItem: FC<IGame> = ({id, name, image, platform, genre, rating }) => {
    
    const onClickAlert = () => {
        const message = alert(`You clicked on ${name}!`);
        return message;
    }


    return (
        <article className="game-item">
            <h3>{name}</h3>
            <img className="game-image" src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>Platform: {platform}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}%</p>
            
            <span onClick={onClickAlert}>
                <i className="fa-solid fa-trash fa-xl" />
            </span>
            <span 
            onClick={onClickAlert}>
            <i className="fa-solid fa-pencil fa-xl"></i>
            </span>
        </article>
    );
};

export default GameItem;
