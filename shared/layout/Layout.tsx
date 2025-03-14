'use client'
import { FC, PropsWithChildren } from "react";
import { usePathname } from 'next/navigation'; 
import Footer from "@/shared/components/footer/Footer";
import Header from "@/modules/home/components/header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname(); 

  return (
    <>
      <Header />
      <main>{children}</main>
   
      {pathname !== '/contact' && <Footer />}
    </>
  );
};

export default Layout;

