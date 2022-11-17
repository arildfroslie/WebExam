import { useState, ChangeEvent } from "react";
import IGame from "../../interfaces/IGame";
import GameService from "../../services/GameService";
import ImageUploadService from "../../services/ImageUploadService";

const UpdateFunction = () => {
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [image, setImage] = useState<string>("");
    const [imageURL, setImageURL] = useState<File | null>(null);

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
            <section>
            <h2>Edit Game</h2>
            <div>
                <label>Id</label>
                <input name='id' onChange={changeHandler} type="number" value={id}/>
                <button onClick={getGameFromService}>Get Game</button>
            </div>
            <div>
                <label>name</label>
                <input name="name" onChange={changeHandler} type="text" value={name}/>
            </div>
            <label>Velg bilde</label>
            <input onChange={setImageHandler} type="file"/>
            <div>
                <label>Platform</label>
                <input name="platform" onChange={changeHandler} type="text" value={platform}/>
            </div>
            <div>
                <label>Genre</label>
                <input name="platform" onChange={changeHandler} type="text" value={genre}/>
            </div>
            <div>
                <label>rating</label>
                <input name="platform" onChange={changeHandler} type="number" value={rating}/>
            </div>
            <button onClick={uploadImage}>Lagre endringer</button>
        </section>
    )
};

export default UpdateFunction;