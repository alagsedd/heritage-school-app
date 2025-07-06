import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, useColorMode } from "@chakra-ui/react";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import {
  IoHomeOutline,
  IoLibrary,
  IoSchoolOutline, // More general school icon
} from "react-icons/io5"; // Using IoSchoolOutline for About Heritage
import { MdOutlineContactPhone } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import {
  FaBookOpen,
  FaUserCog, // Changed from GrUserAdmin for consistency with Fa
  FaGraduationCap, // Changed from TbSchool for better visual
  FaClipboardList, // For admission status
  FaUserShield, // For portals
  FaGlobeAmericas, // For external programs like CEPE/CPS/HBI
} from "react-icons/fa"; // Imported new icons
import ColorModeSwitch from "./ColorModeSwitch"; // Assuming this handles color mode switching visually

import styles from "../styles/NavBar.module.css";
import logo from "../assets/logos/HCC-LOGO-NEW-SLOGAN-123.webp";

// Define navigation items as data for easier management
const mainNavItems = [
  { name: "About Heritage", path: "/about", icon: IoSchoolOutline },
  { name: "Academics", path: "/academics", icon: FaBookOpen },
  { name: "Admissions", path: "/admissions", icon: FaUserCog },
  { name: "Schools", path: "/schools", icon: FaGraduationCap },
  { name: "Library", path: "/library", icon: IoLibrary },
  { name: "Campus", path: "/campus", icon: FaGlobeAmericas }, // Using a more generic icon for campus/environment
  { name: "Contact us", path: "/contact", icon: MdOutlineContactPhone },
  { name: "Donate", path: "/donate", icon: BiSolidDonateHeart },
];

const actionNavItems = [
  {
    name: "Check admission status",
    path: "/admission-status",
    icon: FaClipboardList,
  },
  { name: "Student's Portal", path: "/student-portal", icon: FaUserShield },
  { name: "Faculty Portal", path: "/faculty-portal", icon: FaUserShield },
  { name: "CEPE", path: "/cepe", icon: FaGlobeAmericas }, // Using globe for programs
  { name: "CPS", path: "/cps", icon: FaGlobeAmericas },
  { name: "HBI", path: "/hbi", icon: FaGlobeAmericas },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode } = useColorMode(); // From Chakra UI

  // Determine border color based on colorMode (if not handled globally by Chakra theme)
  // We'll manage this in CSS directly with data-theme attributes for a more robust approach.
  // const borderStyle = colorMode === "light" ? "1px solid #509495" : "1px solid #fbf189";

  return (
    <>
      <nav className={styles.nav} data-theme={colorMode}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
              className={styles.logo}
              src={logo}
              alt="Heritage school's logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.actionNav}>
            {actionNavItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className={styles.actionNavLink}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {/* Chakra Button for "Apply to HCC" */}
              <Button colorScheme="yellow" className={styles.applyButton}>
                Apply to HCC
              </Button>
            </li>
          </ul>

          <ul className={styles.mainNav}>
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className={styles.mainNavLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons for Mobile Menu and Color Mode Switch */}
        <div className={styles.utilityIcons}>
          <Link to={"/"} aria-label="Home">
            <IoHomeOutline className={styles.icon} size={"24"} />{" "}
            {/* Increased size for better tap target */}
          </Link>
          <ColorModeSwitch />{" "}
          {/* Assuming this component is styled internally or globally */}
          {showMenu ? (
            <IoIosCloseCircle
              onClick={() => setShowMenu(false)}
              className={`${styles.icon} ${styles.menuToggleIcon}`}
              size={"28"} // Larger for easier tap
              aria-label="Close menu"
            />
          ) : (
            <IoMenuSharp
              onClick={() => setShowMenu(true)}
              className={`${styles.icon} ${styles.menuToggleIcon}`}
              size={"28"} // Larger for easier tap
              aria-label="Open menu"
            />
          )}
        </div>
      </nav>

      {/* Mobile/Vertical Navigation (Overlay) */}
      {showMenu && (
        <div className={styles.mobileMenuOverlay}>
          <ul className={styles.verticalNav}>
            {/* Action Items */}
            <li className={styles.mobileNavSectionTitle}>Actions</li>
            {actionNavItems.map((item) => (
              <li key={item.name} onClick={() => setShowMenu(false)}>
                <Link to={item.path} className={styles.verticalNavLink}>
                  {item.icon && <item.icon className={styles.liIcon} />}
                  {item.name}
                </Link>
              </li>
            ))}
            <li className={styles.mobileApplyButtonContainer}>
              <Button
                colorScheme="yellow"
                className={styles.mobileApplyButton}
                onClick={() => setShowMenu(false)}
              >
                Apply to HCC
              </Button>
            </li>

            {/* Main Navigation Items */}
            <li className={styles.mobileNavSectionTitle}>Navigation</li>
            {mainNavItems.map((item) => (
              <li key={item.name} onClick={() => setShowMenu(false)}>
                <Link to={item.path} className={styles.verticalNavLink}>
                  {item.icon && <item.icon className={styles.liIcon} />}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
