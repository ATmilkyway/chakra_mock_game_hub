import { Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const label = isDark ? "Light Mode" : "Dark Mode";
  return (
    <Switch.Root
      colorPalette={"green"}
      checked={isDark}
      onChange={toggleColorMode}
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>{label}</Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
