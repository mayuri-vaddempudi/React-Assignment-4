import { Link } from "react-router-dom";
import RingImg from "../../assets/ring.jpg";
import NecklaceImg from "../../assets/necklace.jpg";
import BraceletImg from "../../assets/bracelet.jpg";
import EarringsImg from "../../assets/earrings.jpg";

import styles from "./JewelleryCategories.module.css";

const JewelleryCategories = () => {
  const categories = [
    { name: "rings", img: RingImg },
    { name: "necklaces", img: NecklaceImg },
    { name: "bracelets", img: BraceletImg },
    { name: "earrings", img: EarringsImg },
  ];

  return (
    <div className={styles.categories}>
      <h2>Explore Jewellery Categories</h2>
      <div className={styles.grid}>
        {categories.map((category, idx) => (
          <Link
            key={idx}
            to={`/jewellery/category/${category.name}`}
            className={styles.link}
          >
            <div className={styles.card}>
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JewelleryCategories;
