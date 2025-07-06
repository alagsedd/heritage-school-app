import React from "react";
import { useColorMode } from "@chakra-ui/react";
import styles from "../styles/PresidentMessage.module.css";
import presidentPic from "../assets/president.jpg"; // Ensure this path is correct

const PresidentMessage = () => {
  const { colorMode } = useColorMode();

  return (
    <section className={styles.presidentMessageSection} data-theme={colorMode}>
      <div className={styles.container}>
        <h2 className={styles.mainHeader}>
          <span>Message from the President</span>
        </h2>

        {/* --- President's Image Added Here --- */}
        <div className={styles.presidentImageWrapper}>
          <img
            src={presidentPic}
            alt="President of Heritage Christian University College"
            className={styles.presidentImage}
          />
        </div>
        {/* --- End President's Image --- */}

        <div className={styles.messageContent}>
          <p className={styles.paragraph}>
            Thank you for visiting our website; it gives me great pleasure to
            say that studying at Heritage has a distinctive bent and promising
            future. As a Christian institution of higher learning, Heritage aims
            at promoting transformative education through active engagement in
            scholarship, professionalism and creative pursuits in
            entrepreneurship.
          </p>
          <p className={styles.paragraph}>
            The highlights of Heritage mission include **conviction**,
            **character**, **creativity**, **compassion** and **community** to
            serve God and neighbors.
          </p>
          <p className={styles.paragraph}>
            At Heritage, students live and learn in a manifestly Christ-centered
            environment; our faculty guide students to excel in knowledge and
            skills, and we make it our goal to enhance the total well-being of
            students.
          </p>
          <p className={styles.paragraph}>
            Another distinctive feature of Heritage is that year after year,
            students are presented with the opportunity to learn under the feet
            of some of the world’s renowned authors, entrepreneurs, Computer &
            IT experts.
          </p>
        </div>

        <div className={styles.visionMissionLink}>
          <a
            href="/about-us#vision-mission"
            className={styles.visionMissionButton}
          >
            Vision & Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
