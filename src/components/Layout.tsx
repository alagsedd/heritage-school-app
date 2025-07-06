import { Outlet } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react"; // Assuming Chakra UI's useColorMode is used for theme toggling
import NavBar from "./NavBar"; // Make sure NavBar is imported correctly

import styles from "../styles/Layout.module.css"; // Import the new CSS module

const Layout = () => {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <>
      <div
        className={styles.parent} // Apply the CSS module class
        data-theme={colorMode} // Apply the data-theme attribute based on colorMode
      >
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
