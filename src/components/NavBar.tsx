import styles from "../styles/NavBar.module.css";
import logo from "../assets/logos/HCC-LOGO-NEW-SLOGAN-123.webp";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className="nameBox">
          <img
            className={styles.logo}
            src={logo}
            alt="Heritage school's logo"
          />
        </div>

        <div className={styles.horizontalBox}>
          <ul className={styles.horizontalNav}>
            <Button colorScheme="yellow">Apply to HCC</Button>

            <li>Check admission status</li>
            <li>Student's Portal</li>
            <li>Faculty Portal</li>
            <li>CEPE</li>
            <li>CPS</li>
            <li>HBI</li>
          </ul>

          <ul className={styles.horizontalNav}>
            <li>About Heritage</li>
            <li>Academics</li>
            <li>Admissions</li>
            <li>Schools</li>
            <li>Library</li>
            <li>Campus</li>
            <li>Contact us</li>
            <li>Donate</li>
          </ul>
        </div>

        <div className="iconsBox">
          {" "}
          {showMenu ? (
            <IoIosCloseCircle
              onClick={() => setShowMenu(false)}
              className={styles.icon}
              size={"35"}
            />
          ) : (
            <ImMenu3
              onClick={() => setShowMenu(true)}
              className={styles.icon}
              size={"35"}
            />
          )}
        </div>
      </nav>

      <div className="verticalBox"></div>
    </>
  );
};

export default NavBar;
