import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./layout.module.css";

const Layout = ({ cartItems, cartOpen, toggleCart }) => {
  return (
    <>
      <Header
        cartItems={cartItems}
        cartOpen={cartOpen}
        toggleCart={toggleCart}
      />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
