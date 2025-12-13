import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  if (error) return <p>Something went wrong.</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};

export default GameGrid;
