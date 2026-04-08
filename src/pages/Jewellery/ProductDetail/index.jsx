import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./productDetails.module.css";

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(console.log);
  }, [productId]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className={styles.productDetail}>
      <Link to="/jewellery" className={styles.backButton}>
        ← Back to Collection
      </Link>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className={styles.detailImage}
      />
      <p>Category: {product.category}</p>
      <p>Price: SEK {product.price}</p>
      <p>Description: {product.description || "No description available"}</p>
      <button onClick={() => addToCart(item)} className={styles.cartBtn}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
