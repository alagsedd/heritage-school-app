import { useColorMode } from "@chakra-ui/react";
import styles from "../styles/Part2.module.css"; // Ensure this path is correct

// Define your core values in a data array
const coreValues = [
  {
    name: "Conviction",
    description:
      "Belief in the intelligent Designer and steadfast adherence to truth.",
    accent: "blue", // Used for alternating card accents
  },
  {
    name: "Character",
    description:
      "Upholding integrity and trustworthiness in all aspects of life.",
    accent: "pink",
  },
  {
    name: "Creativity",
    description:
      "Determination to discover, develop, and deploy God-given gifts.",
    accent: "blue",
  },
  {
    name: "Compassion",
    description: "Empathy and kindness demonstrated through service to others.",
    accent: "pink",
  },
  {
    name: "Community", // Assuming this might be the fifth value, can be changed back to Compassion if needed
    description:
      "Fostering an inclusive, supportive, and collaborative environment.",
    accent: "blue",
  },
];

const Part2 = () => {
  const { colorMode } = useColorMode(); // Get current color mode

  return (
    <section className={styles.part2Section} data-theme={colorMode}>
      <h2 className={styles.header1}>
        {/* The span color will now be controlled by CSS based on data-theme */}
        <span>Our five core Values</span>
      </h2>

      <div className={styles.valuesGrid}>
        {coreValues.map((value) => (
          <div
            key={value.name}
            className={`${styles.valueCard} ${styles[value.accent + "Accent"]}`} // Apply base card style and accent style
          >
            <h3 className={styles.valueCardHeader}>
              <span>{value.name}</span>
            </h3>
            <p className={styles.valueCardDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Part2;
