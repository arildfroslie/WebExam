import { useLocation } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import GameService from "../../services/GameService";
import IGame from "../../interfaces/IGame";
import ImageUploadService from "../../services/ImageUploadService";



const AddGame = () => {
    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const [name, setName] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [image, setImage] = useState<string>("");   
    const [imageFile, setImageFile] = useState<File | null>(null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "platform":
                setPlatform(value);
                break;
            case "genre":
                setGenre(value);
                break;
            case "rating":
                setRating(parseInt(value));
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

    const addGame = async () => {
        const game: IGame = {
            name,
            platform,
            genre,
            rating,
            image
        };
       await GameService.addGame(game);
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
    }

    const submitGame = () => {
        addGame();
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
                placeholder="Title"
                name="name"
                onChange={changeHandler}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Platform" 
                name="platform"
                onChange={changeHandler}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Genre"
                name="genre"
                onChange={changeHandler} 
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Rating" 
                name="rating"
                onChange={changeHandler}
            /> <br />

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
                onClick={submitGame} 
            />  
        </section>
    )
}

export default AddGame;