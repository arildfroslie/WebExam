import { useLocation } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import GameService from "../../services/GameService";
import IGame from "../../interfaces/IGame";


const AddGame = () => {
    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const [name, setName] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [image, setImage] = useState<File | null>(null);
    

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
                setImage(e.target.files![0]);
                break;
        }
    };

    const addGame = async () => {
        const game: IGame = {
            name,
            platform,
            genre,
            rating,
            image : image!
        };
        console.log(game);
       await GameService.addGame(game);
    };

    return(
        <>
            <section className="add-function">
                <form className="add-function-form">

                    <label>Add a {header}:</label><br/>
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
                    /> 

                    <input 
                    className="btn" 
                    onChange={changeHandler} 
                    type="file"
                    name='image'
                    />


                    <input 
                    className="btn" 
                    type="button" 
                    value="Submit"
                    onClick={addGame} 
                    />  

                </form>
            </section>
        </>
    )
}

export default AddGame;