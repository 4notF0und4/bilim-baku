import Header from "@/modules/home/components/header/Header";
import HeaderNews from "@/modules/home/components/header-news/HeaderNews";
import styles from "./home.module.css";
import CardsGrid from "./components/cards/CardsGrid";
import InfoBlock from "@/shared/infoblock/InfoBlock";
import FeatureBox from "./components/featureBox/FeatureBox";
import EducationGrid from "./components/educationGrid/EducationGrid";
import TrainingSection from "./components/trainingSection/TrainingSection";
import CardComponent from "./components/labCards/CardComponent";
import GalleryFeatBox from "./components/galleryFeatBox/GalleryFeatBox";
import CompetitionGrid from "./components/competitionsGrid/CompetitionGrid";
import WhyUs from "./components/whyWe/WhyUs";
import PartnerLogos from "./components/partners/PartnerLogos";

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
        <InfoBlock />
        <FeatureBox />
        <EducationGrid />
        <TrainingSection />
        <div className={styles.cardStyle}>
          <CardComponent />
        </div>
        <GalleryFeatBox />
        <CompetitionGrid />
        <WhyUs/>

        <PartnerLogos/>
        
      </div>
    </div>
  );
}

export default Home;


