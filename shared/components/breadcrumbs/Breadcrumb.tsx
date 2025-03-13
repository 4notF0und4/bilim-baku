"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumb.module.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {[{ name: "Home", href: "/" }, ...pathSegments.map((seg, i) => ({
          name: seg.charAt(0).toUpperCase() + seg.slice(1),
          href: "/" + pathSegments.slice(0, i + 1).join("/"),
        }))].map(({ name, href }, index, arr) => (
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



