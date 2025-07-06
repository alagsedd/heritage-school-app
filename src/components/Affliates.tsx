import { useColorMode } from "@chakra-ui/react";
import styles from "../styles/Affliates.module.css";

const Affiliates = () => {
  const { colorMode } = useColorMode();

  // Data for your affiliate institutions and centers
  const affiliateData = [
    {
      id: 1,
      name: "Heritage Christian College (HCC)",
      description: "Our main campus dedicated to holistic Christian education.",
      link: "#", // Replace with actual link if available
    },
    {
      id: 2,
      name: "Ghana Baptist University College",
      description:
        "An affiliated institution expanding our reach and academic offerings.",
      link: "#",
    },
    {
      id: 3,
      name: "University of Cape Coast",
      description:
        "Our degree-awarding affiliate for quality assurance and academic standards.",
      link: "#",
    },
    {
      id: 4,
      name: "Ghana Baptist Convention",
      description:
        "Our founding religious body, providing spiritual and institutional support.",
      link: "#",
    },
    {
      id: 5,
      name: "International Association of Baptist Colleges and Universities (IABCU)",
      description:
        "A global network fostering collaboration and excellence in Baptist higher education.",
      link: "#",
    },
    {
      id: 6,
      name: "Association of African Universities (AAU)",
      description:
        "Promoting quality higher education, research, and innovation across Africa.",
      link: "#",
    },
  ];

  return (
    <section className={styles.affiliatesSection} data-theme={colorMode}>
      <div className={styles.container}>
        <h2 className={styles.mainHeader}>
          <span>Affiliate Institutions and Centres</span>
        </h2>

        <div className={styles.gridContainer}>
          {affiliateData.map((affiliate) => (
            <div key={affiliate.id} className={styles.affiliateCard}>
              <h3 className={styles.cardName}>{affiliate.name}</h3>
              <p className={styles.cardDescription}>{affiliate.description}</p>
              {affiliate.link && (
                <a href={affiliate.link} className={styles.cardLink}>
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
