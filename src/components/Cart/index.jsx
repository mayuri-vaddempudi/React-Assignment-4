import styles from "./cart.module.css";

const Cart = ({ cartItems, onClose }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cart}>
        <button className={styles.closeBtn} onClick={onClose}>
          X
        </button>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className={styles.cartItems}>
              {cartItems.map((item, index) => (
                <li key={index} className={styles.cartItem}>
                  <span>{item.name}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>SEK{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className={styles.total}>
              <strong>Total: SEK{totalPrice}</strong>
            </div>
            <button className={styles.checkoutBtn}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
