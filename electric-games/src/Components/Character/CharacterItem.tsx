import { FC } from "react";
import ICharacter from "../../interfaces/ICharacter";
import "./Character.css"

const CharacterItem: FC<ICharacter> = ({id, name, image, game, description }) => {
    return (
        <article className="character-item">
        <h3>{name}</h3>
        <img className="character-image"  src={`https://localhost:7119/images/Character/${image}`} alt={name} />
        <p>{game}</p>
        <p>{description}</p>
        </article>
    );
};

export default CharacterItem;
