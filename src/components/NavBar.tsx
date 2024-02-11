import styles from "../styles/NavBar.module.css";
import logo from "../assets/logos/HCC-LOGO-NEW-SLOGAN-123.webp";
import { Button, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { IoMdSchool } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { FaBookOpen } from "react-icons/fa";
import { VscServerEnvironment } from "react-icons/vsc";
import { TbSchool } from "react-icons/tb";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode } = useColorMode();

  const borderStyle =
    colorMode === "light" ? "1px solid #509495" : "1px solid #fbf189";

  return (
    <>
      <nav style={{ borderBottom: borderStyle }} className={styles.nav}>
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

        <div className={styles.iconsBox}>
          <Link to={"/"}>
            <IoHomeOutline color="" className={styles.icon} size={"20"} />
          </Link>

          <ColorModeSwitch />

          {showMenu ? (
            <IoIosCloseCircle
              onClick={() => setShowMenu(false)}
              className={styles.icon}
              size={"20"}
            />
          ) : (
            <RiMenu3Fill
              onClick={() => setShowMenu(true)}
              className={styles.icon}
              size={"20"}
            />
          )}
        </div>
      </nav>{" "}
      {showMenu && (
        <ul className={styles.verticalNav}>
          <li>
            <IoMdSchool className={styles.liIcon} />
            About Heritage
          </li>
          <li>
            <FaBookOpen className={styles.liIcon} />
            Academics
          </li>
          <li>
            <GrUserAdmin className={styles.liIcon} />
            Admissions
          </li>
          <li>
            <TbSchool className={styles.liIcon} />
            Schools
          </li>
          <li>
            <IoLibrary className={styles.liIcon} />
            Library
          </li>
          <li>
            <VscServerEnvironment className={styles.liIcon} />
            Campus
          </li>
          <li>
            <MdOutlineContactPhone className={styles.liIcon} />
            Contact us
          </li>
          <li>
            <BiSolidDonateHeart className={styles.liIcon} />
            Donate
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
