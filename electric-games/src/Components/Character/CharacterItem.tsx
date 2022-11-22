import { FC } from "react";
import ICharacter from "../../interfaces/ICharacter";
import DeleteFunction from "../DeleteFunction/DeleteFunction";

const CharacterItem: FC<ICharacter> = ({id, name, image, game, description }) => {

    const onClickAlert = () => {
        const message = alert(`You clicked on ${name}!`);
        return message;
    }
    
    return (
        <article className="output-item">
            <h3>{name}</h3>
            <img className="output-image"  src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>{game}</p>
            <p>{description}</p>
            <DeleteFunction id={id}/>
            <button className="icon" >
                <i className="fa-regular fa-pen-to-square fa-xl"></i>
            </button>
        </article>
    );
};

export default CharacterItem;
