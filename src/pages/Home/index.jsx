import HeroCard from "../../components/HeroCard";
import Hero_1 from "../../assets/home_hero1.jpg";
import Hero_2 from "../../assets/home_hero2.jpeg";
import Hero_3 from "../../assets/home_hero3.jpeg";
import JewelleryCategories from "../../components/JewelleryCategories";
import styles from "./home.module.css";
import AboutSmall from "../../components/AboutSmall";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Top Hero */}
      <HeroCard
        image={Hero_1}
        title="Welcome to World Latest Jewellery!"
        subtitle="This is the Home page"
      />

      {/* Bottom Section */}
      <div className={styles.hero_down}>
        <HeroCard
          image={Hero_2}
          title="Elegant Designs"
          subtitle="Explore collections"
          variant="small"
        />

        <HeroCard
          image={Hero_3}
          title="Luxury Collection"
          subtitle="Shop now"
          variant="small"
        />
      </div>
      <AboutSmall />
      <JewelleryCategories />
    </div>
  );
};

export default Home;
