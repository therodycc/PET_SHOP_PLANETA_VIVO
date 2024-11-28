
import { ButtonNetwork } from "@/components/common/button/button-network";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "./nav";

export const Header = () => {
    return (
        <div className="header-section" id="header-section">
            <div className="container row">
                <Nav />
                <section id="hero" className="hero">
                    <div className="container">
                        <div className="row  mt-5" data-aos="fade-in">
                            <div className="col-lg-8 d-flex flex-column text-center text-lg-start " style={{ marginTop: '150px' }}>
                                <h2>Pet Shop <span>Planeta Vivo</span></h2>
                                <p>Ofrecemos productos y servicios agroveterinarios y control de plagas.</p>
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <a href="#network-section" className="btn-get-started">Contáctanos</a>
                                    <a href="#services-section" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Ver servicios</span></a>
                                </div>
                                <div className="row  w-100 mt-5">
                                    {Object.entries(schedules).map(([key, value]) =>
                                        <div key={key} className="col-lg-4 mb-3 info-container-schedule">
                                            <ButtonNetwork
                                                key={key}
                                                title={key}
                                                description={value}
                                                icon={faCalendar}
                                                onClick={() => { }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 mt-5">
                                <div className="container-logo-img-fluid">
                                    <img src="/assets/imgs/logo.jpeg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
};

const schedules = {
    "Lunes a Viernes": "8:00 AM - 7:00 PM",
    "Sábados": "8:00 AM - 6:00 PM",
    "Domingo": "9:00 AM - 1:00 PM",
};