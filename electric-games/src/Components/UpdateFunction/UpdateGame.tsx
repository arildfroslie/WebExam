import { useState, ChangeEvent } from "react";
import IGame from "../../interfaces/IGame";
import GameService from "../../services/GameService";
import ImageUploadService from "../../services/ImageUploadService";
import { useLocation } from "react-router-dom";
import "./UpdateFunction.css";

const UpdateGame = () => {
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [image, setImage] = useState<string>("");
    const [imageURL, setImageURL] = useState<File | null>(null);

    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const getGameFromService = async () => {
        const game = await GameService.getGamesById(parseInt(id));
        console.log(game);
        setName(game.name);
        setPlatform(game.platform);
        setGenre(game.genre);
        setRating(game.rating);
        setImage(game.image);
    };

    const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;
        if (files != null) {
            setImageURL(files[0]);
        }
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "name":
                setName(value);
                break;
            case "image":
                setImage(value);
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
        }
    };

    const editGame = async () => {
        const game: IGame = {
            id : parseInt(id),
            name,
            image,
            platform,
            genre,
            rating,
        };
        await GameService.updateGame(game);
    };

    const uploadImage = () => {
        if( imageURL != null){
          ImageUploadService.uploadImage( imageURL );
        }
      }

      const editGameAndUploadImage = async () => {
        await editGame();
        await uploadImage();
    }

    return(
        <>
            <section className="update-container">
                <h3>Update a {header}:</h3>
                <div className="update-element">
                    <input 
                    className="text-input-id" 
                    type="number" 
                    placeholder="id" 
                    onChange={changeHandler}
                    name='id'
                    value={id}
                    />
                    <button className="btn" onClick={getGameFromService}>Get Game</button>
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
                <div>
                    <label>Velg bilde</label><br />
                    <input className="btn" onChange={setImageHandler} type="file"/>
                </div>
                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Platform" 
                    onChange={changeHandler}
                    name='platform'
                    value={platform}
                    />
                </div>
                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Genre" 
                    onChange={changeHandler}
                    name='genre'
                    value={genre}
                    />
                </div>
                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Rating"
                    onChange={changeHandler} 
                    name='rating'
                    value={rating}
                    />
                </div>
                <div className="update-element">
                    <button className="btn" onClick={uploadImage}>Save Changes</button>
                </div>
            </section>
        </>
    )
};

export default UpdateGame;