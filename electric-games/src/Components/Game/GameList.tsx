import { useState, useContext } from "react";
import GameItem from "./GameItem";
import SearchFunction from "../SearchFunction/SearchFunction";
import { GameContext } from "../../context/GameContext";
import IGameContext from "../../interfaces/IGameContext";


const GameList = () => {
  const {games} = useContext(GameContext) as IGameContext;
  const [searchTerm, setSearchTerm] = useState("");

  const getGameItems = () => {
    return games?.filter((game) => {
      if (!searchTerm) {
        return true
      }
      return game.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).map((game, i) => (
      <GameItem
        key={`game-${i}`}
        id={game.id}
        name={game.name}
        image={game.image}
        platform={game.platform}
        genre={game.genre}
        rating={game.rating}
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
