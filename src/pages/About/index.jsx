import styles from "./about.module.css";
import AboutHero from "../../assets/about_hero.jpg";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.hero}>
        <img src={AboutHero} alt="About us" />
        <div className={styles.overlay_text}>
          <h1>About Jewellery Store</h1>
          <p>Crafting elegance and luxury for every occasion.</p>
        </div>
      </div>

      <div className={styles.story}>
        <h2>Our Story</h2>
        <p>
          Founded in 2020, our Jewellery Store has been dedicated to creating
          exquisite designs that celebrate life’s most precious moments. We
          combine craftsmanship, elegance, and innovation to bring you timeless
          pieces that shine for generations.
        </p>
      </div>

      {/* Our Mission / Values */}
      <div className={styles.values}>
        <h2>Our Mission</h2>
        <p>
          To provide luxury jewellery that inspires confidence, beauty, and
          unforgettable memories.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Quality Craftsmanship</li>
          <li>Customer Satisfaction</li>
          <li>Sustainable Practices</li>
          <li>Innovative Designs</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
