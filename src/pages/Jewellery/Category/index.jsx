import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../jewellery.module.css";

const Category = ({ addToCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [category]);

  if (products.length === 0) return <p>Loading products...</p>;

  return (
    <div className={styles.jewellery}>
      <h2>{category.toUpperCase()}</h2>
      <div className={styles.grid}>
        {products.map((item) => (
          <div key={item.id} className={styles.card}>
            {/* Link to product detail page */}
            <Link to={`/jewellery/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImage}
              />
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

export default Category;
