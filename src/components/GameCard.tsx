import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap="2">
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <Card.Description>
          {game.parent_platforms.map(({ platform }) => (
            <li key={platform.id}>{platform.name}</li>
          ))}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
