import { FC } from "react";
import ICharacter from "../../interfaces/ICharacter";

const CharacterItem: FC<ICharacter> = ({id, name, image, game, description }) => {
    return (
        <article>
        <h3>{name} ({id})</h3>
        <img src={image} alt={name} />
        <p>{game}</p>
        <p>{description}</p>
        </article>
    );
};

export default CharacterItem;
