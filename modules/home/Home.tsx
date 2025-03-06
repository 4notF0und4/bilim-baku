
import Header from "@/modules/home/components/header/Header";
import HeaderNews from "@/modules/home/components/header-news/HeaderNews";
import styles from "./home.module.css";
import CardsGrid from "./components/cards/CardsGrid";
import InfoBlock from "@/shared/infoblock/InfoBlock";

function Home() {
  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.contentWrapper}>
          <Header />
          <main className={styles.mainContent}>
            <HeaderNews />
          </main>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <CardsGrid />
      <InfoBlock/>
      </div>
    </div>
  );
}

export default Home;

