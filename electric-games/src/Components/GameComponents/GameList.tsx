import { useState, useEffect } from "react";
import GameItem from "./GameItem";
import GameService from "../../Services/GameService";
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
        return Games?.map( (Game, i) => (
            <GameItem 
                key={`Game-${i}`}
                id={Game.id}
                name={Game.name}
                image={Game.image}
                platform={Game.platform}
                genre={Game.genre}
                releaseDate={Game.releaseDate}
                price={Game.price}
                rating={Game.rating}
                />
        ) )
    }

    return(
        <section>
            <h1>Her kommer Games</h1>
            <section>{ getGameItems() }</section>
        </section>
    )
};

export default GameList;