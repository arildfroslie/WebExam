import { useState, ChangeEvent, useContext, useEffect } from "react";
import ICharacter from "../../interfaces/ICharacter";
import CharacterService from "../../services/CharacterService";
import { useLocation } from "react-router-dom";
import { CharacterContext } from "../../context/CharacterContext";
import ImageUploadService from "../../services/ImageUploadService";

const UpdateCharacter = () => {
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>("");
    const [game , setGame] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const characterContext = useContext(CharacterContext);

    const getCharacterFromService = async (id: number) => {
        console.log("I am trying to get:" + id);
        const character = await CharacterService.getCharacterById(id);
        setId(character.id)
        setName(character.name);
        setGame(character.game);
        setDescription(character.description);
        setImageFile(character.imageFile)
        setImage(character.image);
    };

    useEffect(()=> {
        if (characterContext?.characterToEdit && characterContext.characterToEdit.id) {
            getCharacterFromService(characterContext?.characterToEdit.id)
            
        }
    },[characterContext?.characterToEdit?.id]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(id);
                break;
            case "name":
                setName(value);
                break;
            case "game":
                setGame(value);
                break;
            case "image":
                const {files} = e.target;
                if (files != null) {
                    const file = files[0]
                setImageFile(file);
                setImage(file.name)
            }
            break;
            case "description":
                setDescription(value);
                break;
        }
    };

    const editCharacter = async () => {
        const character: ICharacter = {
            id,
            name,
            image,
            game,
            description
        };
        await CharacterService.updateCharacter(character);
        window.location.reload();
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
    }

    const submitChange = () => {
        editCharacter();
        uploadImage();
        window.location.reload();
    }

    return(

        <section className="update-container" id="update-character">
            <label
                className="add-header">
                Update {header}:
            </label>

            <input 
                className="text-input" 
                type="text" 
                placeholder="Name" 
                onChange={changeHandler}
                name='name'
                value={name}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Game" 
                onChange={changeHandler}
                name='game'
                value={game}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Description" 
                onChange={changeHandler}
                name='description'
                value={description}
            />

            <label className="file-input-label">
                Press to Add Image
                <input 
                    className="file-input" 
                    onChange={changeHandler} 
                    type="file"
                    placeholder="Image"
                    name="image"
                /> 
            </label> <br />

            <button 
                className="btn" 
                onClick={submitChange}>
                Save Changes
            </button>

        </section>
    )
};

export default UpdateCharacter;