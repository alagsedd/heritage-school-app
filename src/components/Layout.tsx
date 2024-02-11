import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useColorMode } from "@chakra-ui/react";

const Layout = () => {
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === "light" ? "#ddeaee" : "#1b212a";

  return (
    <>
      <div style={{ backgroundColor: backgroundColor }} className="parent">
        {" "}
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
