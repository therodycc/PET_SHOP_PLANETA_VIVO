import { Button } from "@/components/common/button";
import { TitleText } from "@/components/common/title-text/title-text";
import { useCallback, useEffect, useState } from "react";

import { Link } from "react-scroll";
import { MenuResponsive } from "./menu-responsive";
import { Nav } from "./nav";

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState("header-section");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;

            setIsSticky(window.scrollY > 0);

            sections.forEach(section => {
                const top = section.offsetTop - 150;
                const height = section.offsetHeight;

                if (scrollPosition === 0) setActiveSection("header-section");

                if (scrollPosition >= top && scrollPosition < top + height) {
                    section.id && setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggle = useCallback(
        () => {
            setIsMenuActive(_prev => !_prev)
        },
        [setIsMenuActive],
    )

    return (
        <div className="header-section" id="header-section">
            <div className="container row">
                <div>
                    <nav className={`header-menu ${(isSticky || isMenuActive) ? "sticky" : ""}`}>
                        <div className="logo-header">
                            <div className="title-name">
                                <h1 className="text-white">
                                    Planeta
                                    <span>
                                        Vivo
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <Nav activeSection={activeSection} />
                        {isMenuActive && <MenuResponsive handleToggle={handleToggle} />}
                        <a className={`${isMenuActive ? "active" : ""} nav-button`} onClick={handleToggle}>
                            <span></span>
                        </a>
                    </nav>
                </div>
                <section id="hero" className="hero">
                    <div className="container position-relative">
                        <div className="row gy-5" data-aos="fade-in">
                            <div className="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                                <h2>Pet Shop <span>Planeta Vivo</span></h2>
                                <p>Ofrecemos productos y servicios agroveterinarios y control de plagas.</p>
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <a href="#network-section" className="btn-get-started">Contáctanos</a>
                                    <a href="#services-section" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Ver servicios</span></a>
                                </div>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-2">
                                <div className="container-logo-img-fluid">
                                    <img src="/assets/imgs/logo.jpeg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
};


const schedules = {
    "Lunes a Viernes": "9:00 AM - 5:00 PM",
    "Sábados": "9:00 AM - 12:00 PM",
    "Domingo": "Cerrado",
};
