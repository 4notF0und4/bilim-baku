'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Breadcrumbs from "@/shared/components/breadcrumbs/Breadcrumb";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Share from "./shareBtns/Share";


const NewsDetail = () => {
  return (
    <section className={styles.newsContainer}>
         <div className={styles.breadcrumbWrapper}>
    <Breadcrumbs />
  </div>
      <span className={styles.date}>29 Avq 2021</span>
      <h2 className={styles.title}>Bİlİm Bakı yeni yarışlar elan edir!</h2>
      <div className={styles.imageContainer}>
        <Image
          src="/images/home-bg.jpg"
          alt="News background"
          width={1200}
          height={600}
          priority
        />
      </div>
      <h2 className={styles.subTitle}>Xəbər haqqında birinci başlıq</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
        sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet
        est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
        sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
        tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
        enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
        Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,
        eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
        tincidunt quis, accumsan porttitor, facilisis luctus, metus.
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
        sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet
        est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
        sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
        tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
        enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
        Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,
        eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
        tincidunt quis, accumsan porttitor, facilisis luctus, metus.
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
        sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet
        est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
        sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
        tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
        enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
        Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,
        eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
        tincidunt quis, accumsan porttitor, facilisis luctus, metus.
      </p>
      <p className={`${styles.description} ${styles.highlightedText}`}> <RiDoubleQuotesL />

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eveniet quam odio vel ducimus, saepe dolores nemo quis necessitatibus illum minima quisquam, libero est! Mollitia, amet! Veniam, nostrum neque! Commodi nam corrupti ex facere eum nostrum sit blanditiis! Voluptatem reiciendis exercitationem earum deserunt nulla aliquid corrupti nemo consequuntur ipsum sunt! Aliquam beatae nemo, velit vel nulla itaque placeat ullam provident eos. Voluptas distinctio impedit dolore unde in repellendus, consectetur sed quo tempora. Ipsam aspernatur accusantium ab modi voluptate pariatur deleniti sint. Eaque ut est eos explicabo consectetur eum optio deserunt, vel at ducimus repellat voluptates expedita officia minus aut commodi.<RiDoubleQuotesR />

      </p>
   
      <div className={styles.description}>
  <Share />
</div>
    </section>
  );
};

export default NewsDetail;


