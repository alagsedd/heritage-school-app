import { useColorMode } from "@chakra-ui/react";
import styles from "../styles/Part2.module.css";

const Part2 = () => {
  const { colorMode } = useColorMode();
  const spanColor = colorMode === "light" ? "#509495" : " #fbf189";

  return (
    <>
      <h2 className={styles.header1}>
        <span style={{ color: spanColor }}>Our five core Values</span>
      </h2>

      <div className={styles.parent}>
        <div className={styles.one}>
          <h3 className={styles.header2}>
            <span>Conviction</span>
          </h3>

          <p>the intelligent Designer</p>
        </div>

        <div className={styles.two}>
          <h3 className={styles.header2}>
            <span>Character</span>
          </h3>
          <p>integrity and trustworhiness in all things</p>
        </div>

        <div className={styles.one}>
          <h3 className={styles.header2}>
            <span>Creativity</span>
          </h3>
          <p>determination to discover, develop and deploy God-given gifts</p>
        </div>

        <div className={styles.two}>
          <h3 className={styles.header2}>
            <span>Compassion</span>
          </h3>
          <p>determination to discover, develop and deploy God-given gifts</p>
        </div>

        <div className={styles.one}>
          <h3 className={styles.header2}>
            <span>Compassion</span>
          </h3>
          <p>determination to discover, develop and deploy God-given gifts</p>
        </div>
      </div>
    </>
  );
};

export default Part2;
