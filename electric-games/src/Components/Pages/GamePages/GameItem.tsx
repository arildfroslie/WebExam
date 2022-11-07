import { FC } from "react";
import IGame from "../../Interfaces/IGame";


const GamesItem : FC<IGame> = ({id, title, platform, releaseDate}) => {
    return (
        <article>
            <h3>{title}</h3>
            <img></img>
            <p>{platform}</p>
            <p>{releaseDate}</p>
        </article>
    )
}

