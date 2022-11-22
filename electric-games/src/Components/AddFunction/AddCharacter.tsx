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
        console.log(character);
       await CharacterService.addCharacter(character);
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
        console.log(imageFile?.name);
    }

    const submitcharacter = () => {
        AddCharacter();
        uploadImage();
    };

    return(
        <>
            <section className="add-function" id="add-character">
                <form className="add-function-form">

                    <label>Add a {header}:</label><br/>
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

                    <input 
                    className="btn" 
                    onChange={changeHandler} 
                    type="file"
                    placeholder="Image"
                    name="image"
                    />

                    <input 
                    className="btn" 
                    type="button" 
                    value="Submit"
                    onClick={submitcharacter} 
                    />  

                </form>
            </section>
        </>
    )
}

export default AddCharacter;