import { useState, ChangeEvent, useContext, useEffect } from "react";
import IGame from "../../interfaces/IGame";
import GameService from "../../services/GameService";
import { useLocation } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

const UpdateGame = () => {
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [rating, setRating] = useState<number>( 0 ); 
    const [image, setImage] = useState<string>("");

    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const gameContext = useContext(GameContext);

    const getGameFromService = async (id: number) => {
        console.log("I am trying to get:" + id);
        const game = await GameService.getGamesById(id);
        setId(game.id);
        setName(game.name);
        setPlatform(game.platform);
        setGenre(game.genre);
        setRating(game.rating);
        setImage(game.image);
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
                setId(value);
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
        window.location.reload();
    };

    return(
        <section className="update-container" id="update-game">
            <label>Update a {header}:</label>
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
            <input 
                className="btn" 
                onChange={changeHandler} 
                type="file"
                placeholder="Image"
                name="image"
                />
            </div>

            <div className="update-element">
                <button 
                className="btn-save" 
                onClick={editGame}>Save Changes</button>
            </div>
        </section>
    )
};

export default UpdateGame;