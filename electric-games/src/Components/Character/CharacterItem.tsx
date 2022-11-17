import { FC } from "react";
import ICharacter from "../../interfaces/ICharacter";
import "../../css/Character.css";

const CharacterItem: FC<ICharacter> = ({id, name, image, game, description }) => {

    const onClickAlert = () => {
        const message = alert(`You clicked on ${name}!`);
        return message;
    }
    
    return (
        <article className="character-item">
        <h3>{name}</h3>
        <img className="character-image"  src={`https://localhost:7119/images/${image}`} alt={name} />
        <p>{game}</p>
        <p>{description}</p>
        <span onClick={onClickAlert}>
                <i className="fa-solid fa-trash fa-xl" />
            </span>
            <span onClick={onClickAlert}>
            <i className="fa-solid fa-pencil fa-xl"></i>
            </span>
        </article>
    );
};

export default CharacterItem;
