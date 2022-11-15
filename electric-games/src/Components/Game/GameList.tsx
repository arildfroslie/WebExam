import { useState, useEffect } from "react";
import GameItem from "./GameItem";
import GameService from "../../services/GameService";
import IGame from "../../interfaces/IGame";
import SearchFunction from "../SearchFunction/SearchFunction";

const GameList = () => {
  const [Games, setGames] = useState<IGame[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      const Games = await GameService.getGames();
      setGames(Games);
    };
    fetchGames();
  }, []);

  const getGameItems = () => {
    return Games?.filter((Game) => {
      if (!searchTerm) {
        return true
      }
      return Game.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).map((Game, i) => (
      <GameItem
        key={`Game-${i}`}
        id={Game.id}
        name={Game.name}
        image={Game.image}
        platform={Game.platform}
        genre={Game.genre}
        rating={Game.rating}
      />
    ));
  };

  return (
    <>
      <SearchFunction onChange={setSearchTerm} />
      <section className="output-container">{getGameItems()}</section>
    </>
  );
};

export default GameList;
