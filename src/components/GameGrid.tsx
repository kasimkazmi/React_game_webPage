import { useEffect, useState } from "react";
import api_client from "../services/api_client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GameGridProps {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState();

  console.log(game, "Data Fetched!!");

  useEffect(() => {
    api_client
      .get<GameGridProps>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {game.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
