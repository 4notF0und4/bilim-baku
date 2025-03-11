
import styles from './whyUs.module.css';
import Link from 'next/link';
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';

const WhyUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerText}>
        <h4>NİYƏ BİZ?</h4>
        <h2>Niyə Bilim Bakı?</h2>
      </div>

      <div className={styles.gridContainer}>
        {["Tələbə", "Təlimçi", "Təlimlər"].map((title, index) => {
          const colors = ["var(--blue)", "var(--purple)", "var(--yellow)"];
          return (
            <div className={styles.card} key={index} data-index={index}>
              <div className={styles.cardTitle}>
                <span style={{ color: colors[index] }}>{index === 0 ? "129+" : index === 1 ? "25+" : "10+"}</span>
                <h3>{title}</h3>
              </div>
              <p>Urna amet ultrices tempus tincidunt facilisis in placerat lorem.</p>
              <div className={styles.cardLink}>
                <Link href="#" style={{ color: colors[index] }}>Bax</Link>
                <MdOutlineSubdirectoryArrowRight style={{ color: colors[index] }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;


