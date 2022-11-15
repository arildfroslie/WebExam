import { useState, useEffect } from "react";
import GameItem from "./GameItem";
import GameService from "../../services/GameService";
import IGame from "../../interfaces/IGame";

const GameList = () => {
    const [Games, setGames] = useState<IGame[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            const Games = await GameService.getGames();
            setGames(Games);
        };
        fetchGames();
    }, []);


    const getGameItems = () => {
        console.log(Games)
        return Games?.map( (Game, i) => (
            <GameItem 
                key={`Game-${i}`}
                id={Game.id}
                name={Game.name}
                image={Game.image}
                platform={Game.platform}
                genre={Game.genre}
                rating={Game.rating}
                />
        ) )
    }


    return(
        <section className="output-container">{ getGameItems() }</section>
    )
};

export default GameList;