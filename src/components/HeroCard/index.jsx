import styles from "./heroCard.module.css";

const HeroCard = ({ image, title, subtitle, variant = "default" }) => {
  return (
    <div className={`${styles.hero} ${styles[variant]}`}>
      <div className={styles.image}>
        <img src={image} alt="hero" />
      </div>

      <div className={styles.overlay}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default HeroCard;
