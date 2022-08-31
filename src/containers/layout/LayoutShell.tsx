import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Layout.css";

interface LayoutShellProps {
  sidebar?: React.ReactNode;
  navMenu?: React.ReactNode;
  footer?: React.ReactNode;
  logo: string;
  children: React.ReactNode;
}

const LayoutShell: React.FC<LayoutShellProps> = ({
  children,
  logo,
  navMenu,
  sidebar,
  footer,
}: LayoutShellProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuClick: React.MouseEventHandler<HTMLDivElement> = () => {
    const sidebar = document.querySelector(".sidebar") as HTMLDivElement;
    sidebar.classList.toggle("open");
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="layout_shell-container">
      <header className="header">
        {/* mobile nav */}
        <div className="mobile-nav" onClick={handleMobileMenuClick}>
          {showMobileMenu ? (
            <AiOutlineClose size={24} className="burger-close" />
          ) : (
            <AiOutlineMenu size={24} className="burger-open" />
          )}
        </div>
        {/* logo */}
        <div className="logo">
          <a href="/"><img className="logo-img" src={logo} /></a>
        </div>
        {/* desktop nav */}
        <div className="desktop-nav">{navMenu}</div>
      </header>
      {/* Sidebar */}
      <div className="sidebar">{sidebar}</div>
      <main className="content-container">{children}</main>
      {/* Footer */}
      {footer}
    </div>
  );
};
export default LayoutShell;
