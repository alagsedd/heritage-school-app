import { Button, useColorMode } from "@chakra-ui/react";
import styles from "../styles/InfoCard.module.css";

interface Props {
  title: string;
  desc: string;
  image: string;
  buttonInfo: string;
}

const InfoCard = ({ desc, title, buttonInfo, image }: Props) => {
  const { colorMode } = useColorMode();

  const fontColor = colorMode === "light" ? "#626364" : "#fff";
  const spanColor = colorMode === "light" ? "#509495" : " #fbf189";
  const buttonColor = colorMode === "light" ? "teal" : " yellow";

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.descriptionCard}>
          <h2 className={styles.title}>
            <span
              style={{
                color: spanColor,
              }}
            >
              {title}
            </span>
          </h2>
          <p style={{ color: fontColor }} className={styles.desc}>
            {desc}
          </p>
          <Button variant={"solid"} colorScheme={buttonColor}>
            {buttonInfo}
          </Button>
        </div>

        <div className={styles.imgCon}>
          <img
            className={styles.image}
            src={image}
            alt="Your browser doesn't support this image"
          />
        </div>
      </div>
    </>
  );
};

export default InfoCard;
