import Navigation from "../Navigation";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.section}>
          <h2>Jewellery Store</h2>
          <p>Elegant designs for every occasion.</p>
        </div>

        {/* Middle */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <Navigation footer={true} />
        </div>

        {/* Right */}
        <div className={styles.section}>
          <h3>Contact</h3>
          <p>Email: support@jewellery.com</p>
          <p>Phone: +46 98765 43210</p>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© 2026 Jewellery Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
