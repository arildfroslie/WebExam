import { FC, useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import ICharacter from "../../interfaces/ICharacter";
import DeleteCharacter from "../DeleteFunction/DeleteCharacter";
import scrollFunction from "../ScrollFunction/ScrollFunction";

const CharacterItem: FC<ICharacter> = ({id, name, image, game, description }) => {
    const characterContext = useContext(CharacterContext);
    
    return (
        <article className="output-item">
            <h3>{name}</h3>
            <img className="output-image"  src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>{game}</p>
            <p>{description}</p>
            <DeleteCharacter id={id} />
            <button className="icon"onClick={() =>
                {
                    scrollFunction("update-character")
                    characterContext?.setCharacterToEdit({id, name, image, game, description})
                }}> 
                <i className="fa-regular fa-pen-to-square fa-xl"></i>
            </button>
        </article>
    );
};

export default CharacterItem;
