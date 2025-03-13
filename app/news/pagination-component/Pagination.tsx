'use client'
import React, { useState } from "react";
import styles from "./pagination.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft /> Previous
      </button>

      <div className={styles.pageNumbers}>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`${styles.pageButton} ${currentPage === page ? styles.active : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ""}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
