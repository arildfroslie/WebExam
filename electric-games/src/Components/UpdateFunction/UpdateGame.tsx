import { useState, ChangeEvent, useContext, useEffect } from "react";
import IGame from "../../interfaces/IGame";
import GameService from "../../services/GameService";
import { useLocation } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import ImageUploadService from "../../services/ImageUploadService";

const UpdateGame = () => {
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [rating, setRating] = useState<number>( 0 ); 
    const [image, setImage] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const gameContext = useContext(GameContext);

    const getGameFromService = async (id: number) => {
        console.log("I am trying to get: " + id);
        const game = await GameService.getGamesById(id);
        setId(game.id);
        setName(game.name);
        setPlatform(game.platform);
        setGenre(game.genre);
        setRating(game.rating);
        setImage(game.image);
        setImageFile(game.imageFile);
    };

    useEffect(() => {
        if (gameContext?.gameToEdit && gameContext.gameToEdit.id) {
            getGameFromService(gameContext?.gameToEdit.id)
        }
    },[gameContext?.gameToEdit?.id]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(id);
                break;
            case "name":
                setName(value);
                break;
            case "platform":
                setPlatform(value);
                break;
            case "genre":
                setGenre(value);
                break;
            case "image":
                const {files} = e.target;
                if (files != null) {
                    const file = files[0]
                setImageFile(file);
                setImage(file.name)
            }
                break;
            case "rating":
                setRating(parseInt(value));
                break;
        }
    };

    const editGame = async () => {
        const game: IGame = {
            id,
            name,
            image,
            platform,
            genre,
            rating,
        };
        await GameService.updateGame(game);
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
    }

    const submitChange = () => {
        editGame();
        uploadImage();
    }

    return(
        <section className="update-container" id="update-game">
            <label>Update a {header}:</label>


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
            placeholder="Platform" 
            onChange={changeHandler}
            name='platform'
            value={platform}
            />

            <input 
            className="text-input" 
            type="text" 
            placeholder="Genre" 
            onChange={changeHandler}
            name='genre'
            value={genre}
            />


            <input 
            className="text-input" 
            type="text" 
            placeholder="Rating"
            onChange={changeHandler} 
            name='rating'
            value={rating}
            />

            <input 
            className="file-input" 
            onChange={changeHandler} 
            type="file"
            placeholder="Image"
            name="image"
            />


            <button 
            className="btn-save" 
            onClick={submitChange}>
            Save Changes
            </button>

        </section>
    )
};

export default UpdateGame;