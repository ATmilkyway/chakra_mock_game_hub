import { HStack, Image } from "@chakra-ui/react";
import Logo from "@/assets/react.svg";

const NavBar = () => {
  return (
    <HStack padding={4}>
      <Image src={Logo} />
    </HStack>
  );
};

export default NavBar;
