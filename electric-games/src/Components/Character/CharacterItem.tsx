import { FC, useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import ICharacter from "../../interfaces/ICharacter";
import DeleteFunction from "../DeleteFunction/DeleteFunction";
import scrollFunction from "../UpdateFunction/ScrollFunction";

const CharacterItem: FC<ICharacter> = ({id, name, image, game, description }) => {
    const characterContext = useContext(CharacterContext);
    
    return (
        <article className="output-item">
            <h3>{name}</h3>
            <img className="output-image"  src={`https://localhost:7119/images/${image}`} alt={name} />
            <p>{game}</p>
            <p>{description}</p>
            <DeleteFunction id={id}/>
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
