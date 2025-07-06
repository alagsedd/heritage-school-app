import { useColorMode } from "@chakra-ui/react";
import styles from "../styles/Footer.module.css"; // Ensure path is correct

// You might want to use actual icon libraries like react-icons for these
// For now, these are just placeholders
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();

  // Data for "Other Links" to make it easily manageable
  const otherLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "News", href: "/news" },
    { name: "Library", href: "/library" },
    { name: "CEPE", href: "/cepe" },
    { name: "CPS", href: "/cps" },
    { name: "TruthTV", href: "/truth-tv" },
    { name: "HBI", href: "/hbi" },
    { name: "Students’ portal", href: "/students-portal" },
    { name: "Faculty portal", href: "/faculty-portal" },
    { name: "Entry requirements", href: "/entry-requirements" },
    { name: "Vacancies", href: "/vacancies" },
  ];

  const currentYear = new Date().getFullYear(); // Dynamically get current year

  return (
    <footer className={styles.footer} data-theme={colorMode}>
      <div className={styles.footerContent}>
        {/* --- Contact Info Section --- */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <address className={styles.contactInfo}>
            <p>Heritage Christian University</p>
            <p>P. O. Box AN 16798, Accra</p>
            <p>Location: Amasaman, Behind Olympic Stadium</p>
            <p>
              <a href="tel:+233206730382" className={styles.contactLink}>
                +233 206-730-382
              </a>
            </p>
            <p>
              <a
                href="mailto:registry@hcu.edu.gh"
                className={styles.contactLink}
              >
                registry@hcu.edu.gh
              </a>
            </p>
          </address>
        </div>

        {/* --- Social Media Section --- */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Stay Connected!</h3>
          <p className={styles.socialText}>
            Follow HCU on all social media platforms for updates, insights, and
            more. 🚀📲
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com/your-hcu-page"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/your-hcu-page"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/your-hcu-page"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/your-hcu-page"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            {/* Add more social media icons/links as needed */}
          </div>
        </div>

        {/* --- Other Links Section --- */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.quickLinksList}>
            {otherLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={styles.quickLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- Copyright Section --- */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} Heritage Christian University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
