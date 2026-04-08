import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "../Cart";
import Navigation from "../Navigation";
import styles from "./header.module.css";
import Logo from "../../assets/logo.jpg";

const Header = ({ cartItems, toggleCart, cartOpen }) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <img src={Logo} alt="Logo" className={styles.logo} />

        <Navigation />

        <div className={styles.cart} onClick={toggleCart}>
          <FiShoppingCart size={28} />
          {cartItems.length > 0 && (
            <span className={styles.cartCount}>{cartItems.length}</span>
          )}
        </div>
      </div>

      {cartOpen && <Cart cartItems={cartItems} onClose={toggleCart} />}
    </header>
  );
};

export default Header;
