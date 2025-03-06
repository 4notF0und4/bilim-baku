

// import Header from "@/modules/home/components/Header";
// import HeaderNews from "@/modules/home/components/header-news/HeaderNews";
// import styles from "./home.module.css";
// import CardsGrid from "./components/cards/CardsGrid";

// const Home = () => {
//   return (
//     <div>
//       <div className={styles["home-container"]}>
//         <div className={styles["content-wrapper"]}>
//           <Header />
//           <main className={styles["main-content"]}>
//             <HeaderNews />
//           </main>
//         </div>
//       </div>
//       <div className={styles["card-wrapper"]}>
//         <CardsGrid />
//       </div>
//     </div>
//   );
// };

// export default Home;

import Header from "@/modules/home/components/Header";
import HeaderNews from "@/modules/home/components/header-news/HeaderNews";
import styles from "./home.module.css";
import CardsGrid from "./components/cards/CardsGrid";

const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;

