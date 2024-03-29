import { useLocation } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import CharacterService from "../../services/CharacterService";
import ICharacter from "../../interfaces/ICharacter";
import ImageUploadService from "../../services/ImageUploadService";


const AddCharacter = () => {
    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");   
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [description, setDescription] = useState<string>("");
    const [game, setGame] = useState<string>("");

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "game":
                setGame(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "image":
                const {files} = e.target;
                if (files != null) {
                    const file = files[0]
                setImageFile(file);
                setImage(file.name)
            }
        }
    };

    const AddCharacter = async () => {
        const character: ICharacter = {
            name,
            image,
            game,
            description
        };
       await CharacterService.addCharacter(character);
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
    }

    const submitCharacter = () => {
        AddCharacter();
        uploadImage();
        window.location.reload();
    };

    return(
        <section className="add-container" id="add-function">

            <label
                className="add-header"
                >Add a {header}:
            </label>

            <input 
                className="text-input" 
                type="text" 
                placeholder="Name"
                name="name"
                onChange={changeHandler}
            />

            <input
                className="text-input"
                type="text"
                placeholder="Game"
                name="game"
                onChange={changeHandler}
            />

            <input
                className="text-input"
                type="text"
                placeholder="Description"
                name="description"
                onChange={changeHandler}
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

            <input 
                className="btn" 
                type="button" 
                value="Submit"
                onClick={submitCharacter} 
            />  

        </section>
    )
}

export default AddCharacter;