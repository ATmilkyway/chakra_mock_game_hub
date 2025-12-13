import apiClient from "@/services/apiClient";
import axios from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGameResponse {
  count: number;
  next: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results));
    return controller.abort;
  }, []);

  return (
    <div>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};

export default GameGrid;
