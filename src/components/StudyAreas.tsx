import React from 'react';
import { useColorMode } from "@chakra-ui/react"; // Import useColorMode
import styles from "../styles/StudyAreas.module.css"; // Import the CSS module

const StudyAreas = () => {
  const { colorMode } = useColorMode(); // Get the current color mode

  const schools = [
    "School of Engineering, Technology and Applied Science",
    "School of Nursing and Midwifery",
    "School of Business and Leadership",
    "School of Humanities and Social Sciences",
    "School of Graduate Studies and Research",
  ];

  return (
    <section className={styles.studyAreasSection} data-theme={colorMode}>
      <div className={styles.container}>
        <h2 className={styles.mainHeader}>
          <span>Areas of Study</span>
        </h2>

        <p className={styles.accreditation}>
          Chartered and Accredited by GTEC
        </p>

        <ul className={styles.schoolsList}>
          {schools.map((school, index) => (
            <li key={index} className={styles.schoolItem}>
              {school}
            </li>
          ))}
        </ul>

        <p className={styles.programDescription}>
          Both our undergraduate and graduate programmes are essentially designed to match current and future global challenges and opportunities.
        </p>

        <div className={styles.applyButtonContainer}>
          <button className={styles.applyButton}>
            Apply now
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyAreas;