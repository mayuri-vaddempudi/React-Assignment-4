import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./navigation.module.css";

const Navigation = ({ footer }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={footer ? styles.navFooter : styles.nav}>
      {/* Hamburger Button (only header mode) */}
      {!footer && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
      )}

      {/* Menu Links */}
      <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
        <NavLink
          className={footer ? styles.navItemFooter : styles.navItem}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          className={footer ? styles.navItemFooter : styles.navItem}
          to="/jewellery"
          onClick={() => setMenuOpen(false)}
        >
          Jewellery
        </NavLink>

        <NavLink
          className={footer ? styles.navItemFooter : styles.navItem}
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          className={footer ? styles.navItemFooter : styles.navItem}
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
