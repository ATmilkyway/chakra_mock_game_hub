import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body gap="2">
        <HStack justifyContent={"space-between"}></HStack>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
