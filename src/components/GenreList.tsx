import useGenres from "@/hooks/useGenres";
import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return <p>Something went wrong.</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List.Root listStyle={"none"}>
        {data.map((genre) => (
          <HStack marginBottom={3} key={genre.id}>
            <Image src={genre.image_background} boxSize={30} borderRadius={8} />
            <Button
              variant={"ghost"}
              fontSize={"lg"}
              textAlign="left"
              fontWeight={"normal"}
            >
              <List.Item key={genre.id}>{genre.name}</List.Item>
            </Button>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
