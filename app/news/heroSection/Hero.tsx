'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./hero.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import slides from "./slidesData"; 

const Hero: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
  
    return () => clearInterval(interval); 
  }, [currentSlide]);
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); 
  };

  const handleNewsClick = () => {
    router.push(`/news/${slides[currentSlide].title.replace(/\s+/g, "-").toLowerCase()}`); 
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.slide}
          >
            <div className={styles.textContent}>
              <span className={styles.date}>{slides[currentSlide].date}</span>
              <h2 className={styles.title}>{slides[currentSlide].title}</h2>
              <p className={styles.description}>{slides[currentSlide].description}</p>
              <button className={styles.newsButton} onClick={handleNewsClick}>
                Xəbərə bax
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={prevSlide} aria-label="Previous Slide">
          <FaArrowLeft />
        </button>
        <button className={styles.navButton} onClick={nextSlide} aria-label="Next Slide">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;





