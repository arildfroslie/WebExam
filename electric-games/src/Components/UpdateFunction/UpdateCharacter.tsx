import { useState, ChangeEvent, useRef } from "react";
import ICharacter from "../../interfaces/ICharacter";
import CharacterService from "../../services/CharacterService";
import { useLocation } from "react-router-dom";

const UpdateCharacter = () => {
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [game , setGame] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const getcharacterFromService = async () => {
        const character = await CharacterService.getCharacterById(parseInt(id));
        setName(character.name);
        setGame(character.game);
        setDescription(character.description);
        setImage(character.image);
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "name":
                setName(value);
                break;
            case "game":
                setGame(value);
                break;
            case "description":
                setDescription(value);
                break;
        }
    };

    const editcharacter = async () => {
        const character: ICharacter = {
            id : parseInt(id),
            name,
            image,
            game,
            description
        };
        await CharacterService.updateCharacter(character);
        window.location.reload();
    };

    return(
        <>
            <section className="update-container">
                <label>Update a {header}:</label><br/>
                <div className="update-element">
                    <input 
                    className="text-input-id" 
                    type="number" 
                    placeholder="id" 
                    onChange={changeHandler}
                    name='id'
                    value={id}
                    />
                    <button className="btn" onClick={getcharacterFromService}>Get character</button>
                </div>
                
                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Name" 
                    onChange={changeHandler}
                    name='name'
                    value={name}
                    />
                </div>

                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Game" 
                    onChange={changeHandler}
                    name='game'
                    value={game}
                    />
                </div>

                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Description" 
                    onChange={changeHandler}
                    name='description'
                    value={description}
                    />
                </div>

                <div className="update-element">
                    <button 
                    className="btn" 
                    onClick={editcharacter}>Save Changes</button>
                </div>

            </section>
        </>
    )
};

export default UpdateCharacter;