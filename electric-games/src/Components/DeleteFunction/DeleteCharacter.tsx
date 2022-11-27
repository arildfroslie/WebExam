import { useContext} from "react";
import { CharacterContext } from "../../context/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";
import { FC } from "react";
import ICharacter from "../../interfaces/ICharacter";

const DeleteCharacter: FC< Pick<ICharacter,"id">> = ({id}) => {
    const {characters, deleteCharacterById} = useContext(CharacterContext) as ICharacterContext;

    const character = characters.find(thisCharacter => {
        return thisCharacter.id === id;
    });

    const deleteCharacter = () => {
        
        if (window.confirm("Are you sure you want to delete: " + character?.name + "?")) {
            deleteCharacterById(id!)
            window.location.reload();
        }
    }

    return(
            <button className="delete-icon" onClick={deleteCharacter}>
                <i className="fa-regular fa-trash-can fa-xl"></i>
            </button>
    )
}

export default DeleteCharacter;