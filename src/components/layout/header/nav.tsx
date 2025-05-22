import { navOptions } from "@/settings/nav-options";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MenuResponsive } from "./menu-responsive";
import { useRouter } from "next/router";

interface Props {}

export const Nav = ({}: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("header-section");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      setIsSticky(window.scrollY > 0);

      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (scrollPosition === 0) setActiveSection("header-section");

        if (scrollPosition >= top && scrollPosition < top + height) {
          section.id && setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = useCallback(() => {
    setIsMenuActive((_prev) => !_prev);
  }, [setIsMenuActive]);

  const goHome = useCallback(() => {
    const el = document.getElementById("header-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className={`header-menu ${isSticky || isMenuActive ? "sticky" : ""}`}>
      <div className="logo-header">
        <div
          className="title-name"
          onClick={goHome}
          style={{ cursor: "pointer" }}
        >
          <h1 className="text-white">
            Epagricula
            <span>RD</span>
          </h1>
        </div>
      </div>
      <ul className="header-options">
        {navOptions.map((opt) => {
          const { title, ...options } = opt;
          return (
            <Link
              {...options}
              key={opt.to}
              className={`option-header-item ${
                activeSection === opt.to ? "active" : ""
              }`}
            >
              {title}
            </Link>
          );
        })}
      </ul>
      {isMenuActive && <MenuResponsive handleToggle={handleToggle} />}
      <a
        className={`${isMenuActive ? "active" : ""} nav-button`}
        onClick={handleToggle}
      >
        <span></span>
      </a>
    </nav>
  );
};
