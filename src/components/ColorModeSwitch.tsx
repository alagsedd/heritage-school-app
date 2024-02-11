import { useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { PiSunLight } from "react-icons/pi";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {" "}
      {colorMode === "light" ? (
        <FaMoon onClick={toggleColorMode} size={"20"} />
      ) : (
        <PiSunLight onClick={toggleColorMode} size={"20"} />
      )}
    </>
  );
};

export default ColorModeSwitch;
