"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumb.module.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);


  const breadcrumbNames: Record<string, string> = {
    "/": "Ana səhifə",   
    "/about": "Haqqımızda",  
    "/labs": "Laboratoriyalar",
    "/centers": "Mərkəzlər",  
    "/news": "Xəbərlər",     
    "/diary": "Günlük",     
    "/contact": "Əlaqə",    
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {[{ name: "Ana səhifə", href: "/" }, ...pathSegments.map((seg, i) => {
          const href = "/" + pathSegments.slice(0, i + 1).join("/");
       
          const name = breadcrumbNames[href] || seg.charAt(0).toUpperCase() + seg.slice(1);
          return { name, href };
        })].map(({ name, href }, index, arr) => (
          <li key={href} className={styles.breadcrumbItem}>
            {index === arr.length - 1 ? (
              <span className={styles.active}>{name}</span>
            ) : (
              <>
                <Link href={href}>{name}</Link>
                <span className={styles.breadcrumbSeparator}>
                  <RiArrowRightDoubleLine />
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
