import { FC } from "react";
import IGame from "../../interfaces/IGame";

const GameItem: FC<IGame> = ({id, name, image, platform, genre, releaseDate, price, rating }) => {
    return (
        <article>
            <h3>{name} ({id})</h3>
            <img src={image} alt={name} />
            <p>Platform: {platform}</p>
            <p>Genre: {genre}</p>
            <p>Release Date: {releaseDate}</p>
            <p>Price: {price}</p>
        </article>
    );
};

export default GameItem;
