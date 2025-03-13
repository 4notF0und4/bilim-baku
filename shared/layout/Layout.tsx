import { FC, PropsWithChildren } from "react";
import Footer from "@/shared/components/footer/Footer"; 
import Header from "@/modules/home/components/header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <><Header/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
