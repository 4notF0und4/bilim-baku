import styles from "./page.module.css";
import Header from "@/modules/home/components/header/Header";
import PartnerLogos from "@/modules/home/components/partners/PartnerLogos";
import WhyUs from "@/modules/home/components/whyWe/WhyUs";
import InfoBlock from "@/shared/infoblock/InfoBlock";
import History from "./bilimHistory/History";
import StudentPhoto from "@/shared/components/student/StudentPhoto";
import VisionMissionCards from "./targets/VisionMissionCards";
import Breadcrumb from "@/shared/components/navigation/Breadcrumb";

const page = () => {
  return (

    <main className={styles.container}>

<div className={styles.breadcrumbWrapper}>
        <Breadcrumb />
      </div>
    
        <Header/>
       
    <InfoBlock/>
    <WhyUs/>
    <History/>
    <StudentPhoto/>
    <VisionMissionCards/>
    <PartnerLogos/>
     
 
    </main>

  
  );
}
export default page