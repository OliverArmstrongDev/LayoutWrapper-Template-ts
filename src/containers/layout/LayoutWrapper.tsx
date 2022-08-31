import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import Sidebar from "../../components/sidebar/Sidebar";
import LayoutShell from "./LayoutShell";

type layoutShellProps = {
  children: React.ReactNode;
};

const LayoutWrapper: React.FC<layoutShellProps> = ({ children }) => {
  return (
    <LayoutShell
      logo={
        "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_960_720.png"
      }
      navMenu={<Nav />}
      sidebar={<Sidebar>Sidebar content</Sidebar>}
      footer={<Footer />}
    >
      {children}
    </LayoutShell>
  );
};

export default LayoutWrapper;
