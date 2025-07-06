import { useColorMode } from "@chakra-ui/react";
import Part2 from "../components/Part2";
import Slider from "../components/Slider";
import styles from "../styles/HomePage.module.css";
import StudyAreas from "../components/StudyAreas";
import PresidentMessage from "../components/PresidentMessage";
import Affiliates from "../components/Affliates";
import Footer from "../components/Footer";

const HomePage = () => {
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === "light" ? "#ddeaee" : "#1b212a";

  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.parent}>
      <Slider />
      <Part2 />
      <StudyAreas />
      <PresidentMessage />
      <Affiliates />
      <Footer />
    </div>
  );
};

export default HomePage;
