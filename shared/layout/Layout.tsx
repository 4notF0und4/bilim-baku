import { FC, PropsWithChildren } from "react";
import Footer from "@/shared/components/footer/Footer"; 

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
