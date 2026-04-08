import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./jewellery.module.css";

const Jewellery = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.log);
  }, []);

  // ✅ Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className={styles.jewellery}>
      <h1>Jewellery Collection</h1>

      {/* ✅ CATEGORY LINKS */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <Link key={cat} to={`/jewellery/category/${cat}`}>
            {cat.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className={styles.grid}>
        {products.map((item) => (
          <div key={item.id} className={styles.card}>
            <Link to={`/jewellery/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </Link>
            <p>SEK {item.price}</p>
            <button onClick={() => addToCart(item)} className={styles.cartBtn}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewellery;
