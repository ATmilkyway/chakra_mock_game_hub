import { HStack, Image } from "@chakra-ui/react";
import Logo from "@/assets/react.svg";
import ColorModeSwitch from "../ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding={4} justifyContent={"space-between"}>
      <Image src={Logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
