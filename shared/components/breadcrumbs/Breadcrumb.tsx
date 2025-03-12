

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './breadcrumb.module.css';
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        <li key="home" className={styles.breadcrumbItem}>
          {pathSegments.length === 0 ? (
            <span className={styles.active}>Home</span>
          ) : (
            <>
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSeparator}>
                <RiArrowRightDoubleLine />
              </span>
            </>
          )}
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          const displayName = segment.charAt(0).toUpperCase() + segment.slice(1);
          return (
            <li key={href} className={styles.breadcrumbItem}>
              {isLast ? (
                <span className={styles.active}>{displayName}</span>
              ) : (
                <>
                  <Link href={href}>{displayName}</Link>
                  <span className={styles.breadcrumbSeparator}>
                    <RiArrowRightDoubleLine />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;


