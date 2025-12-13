import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}
const PlatfromIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.slug} color="gray.500" as={'h1'} >{platform.name}</Icon>
      ))}
    </HStack>
  );
};

export default PlatfromIconList;
