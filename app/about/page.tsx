import styles from "./page.module.css";
import Header from "@/modules/home/components/header/Header";
import InfoBlock from "@/shared/infoblock/InfoBlock";

const page = () => {
  return (
    <main className={styles.container}>
        <Header/>
        <section className={styles.contentWrapper}>
    <InfoBlock/>
        </section>
 
    </main>
  );
}
export default page