import { faAudible } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import services from "../../data/services.json";
import { useCallback } from "react";

export const Services: React.FC = () => {
    const handleWhatsAppService = useCallback((service: string) => {
        window.open(
            `https://wa.me/18294587526?text=Saludos! Me gustaría saber más sobre el servicio de ${service}`,
            "_blank"
        );
    }, []);

    return (
        <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
            {services.map((element, index) => {
                return (
                    <>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item  position-relative">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faAudible as any} />
                                </div>
                                <h3>{element.title}</h3>
                                <p className="mb-3">{element.desc}</p>
                                <a
                                    onClick={() => handleWhatsAppService(element.title)}
                                    className=" btn-get-started cursor-pointer"
                                    style={{ background: "#008374" }}
                                >
                                    Solicitar información
                                </a>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
};
