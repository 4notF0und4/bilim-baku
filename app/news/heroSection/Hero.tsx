'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./hero.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slides = [
  {
    date: "29 Avq 2021",
    title: "BİLİM BAKI YENİ YARIŞLAR ELAN EDİR!",
    description: "Gənc innovatorlar üçün yeni fürsət! BİLİM Bakı elm və texnologiya sahəsində yarışlar elan edir.",
  },
  {
    date: "12 Sen 2021",
    title: "STEM TƏLİMLƏRİNƏ QEYDİYYAT BAŞLADI!",
    description: "İbtidai və orta məktəb şagirdləri üçün STEM dərslərinə qeydiyyat açıqdır. İştirak edin!",
  },
  {
    date: "5 Okt 2021",
    title: "ROBOTOTEXNİKA WORKSHOPU KEÇİRİLƏCƏK!",
    description: "Texnologiya həvəskarları üçün pulsuz robototexnika seminarı təşkil ediləcək.",
  },
  {
    date: "20 Noy 2021",
    title: "3D MODEL LAYİHƏ YARIŞMASI BAŞLAYIR!",
    description: "Dizayn və 3D modelləşdirmə bacarıqlarınızı sınayın! Qalibləri mükafatlar gözləyir.",
  },
  {
    date: "15 Dek 2021",
    title: "KİÇİK YAŞLI ŞAGİRDLƏR ÜÇÜN PROQRAMLAŞDIRMA!",
    description: "6-10 yaş arası uşaqlar üçün əyləncəli və interaktiv proqramlaşdırma dərsləri başlayır.",
  },
];

const Hero: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNewsClick = () => {
    router.push(`/news/${currentSlide + 1}`);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        <div
          className={styles.content}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.textContent}>
                <span className={styles.date}>{slide.date}</span>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.description}>{slide.description}</p>
                <button className={styles.newsButton} onClick={handleNewsClick}>
                  Xəbərə bax
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigation}>
        <button  className={`${styles.navButton} ${currentSlide === 0 ? styles.disabled : ""}`}
          onClick={prevSlide}
          disabled={currentSlide === 0}>
          <FaArrowLeft />
        </button>
        <button className={`${styles.navButton} ${currentSlide === slides.length - 1 ? styles.disabled : ""}`}
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;



