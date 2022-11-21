import { FC } from "react";
import IGame from "../../interfaces/IGame";
import DeleteFunction from "../DeleteFunction/DeleteFunction";
import ScrollToUpdate from "../UpdateFunction/ScrollToUpdate";

const GameItem: FC<IGame> = ({id, name, image, platform, genre, rating }) => {
    return (
        <article className="output-item" id={String(id)}>
            <h3>{name}</h3>
            <img className="output-image" src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>Platform: {platform}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}%</p>
            
            <DeleteFunction id={id}/>
            <ScrollToUpdate />
        </article>
    );
};

export default GameItem;
