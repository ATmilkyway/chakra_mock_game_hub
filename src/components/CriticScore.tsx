import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 89 ? "green" : score > 80 ? "yellow" : "red";
  return <Badge colorPalette={color}>{score}</Badge>;
};

export default CriticScore;
