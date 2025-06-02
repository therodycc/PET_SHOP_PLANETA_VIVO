import { navOptions } from "@/settings/nav-options";
import { networks } from "@/shared/networks";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { Link } from "react-scroll";


export const Footer = () => {
    const call = useCallback((phoneNumber: number) => {
        const encodedNumber = encodeURIComponent(`+1${phoneNumber}`);
        window.open(`tel:${encodedNumber}`);
    }, []);

    const handleNetwork = useCallback((link: string, network: string) => {
        if (network === "call") return call(8294587526)
        if (network === "tell") return call(8094145572)

        window.open(link, '_blank');
    }, [call])

    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="#" className="logo d-flex align-items-center">
                            <span>Epagricula RD</span>
                        </a>
                        <p>Tiendas de mascotas y servicios</p>
                        <p>Tienda de mascotas, Santo Domingo Este, El Almirante</p>
                        <div className="social-links d-flex mt-4">
                            {networks.map((item) =>
                                <a href="#" style={{ width: "50px", height: "50px", lineHeight: "50px" }}>
                                    <FontAwesomeIcon
                                        icon={item.icon as IconProp}
                                        key={item.title}
                                        onClick={() => handleNetwork(item.link, item.title)} 
                                        style={{ width: "20px", height: "20px", }}
                                        />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Navega</h4>
                        <ul>
                            {navOptions.map((opt) => {
                                const { title, ...options } = opt
                                return (
                                    <Link
                                        {...options}
                                        key={opt.to}
                                        className={`option-header-item d-block mb-3`}
                                    >
                                        {title}
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>Impact</span></strong>. Derechos Reservados.
                </div>
                <div className="credits">
                    Diseñado por Rody Castro
                </div>
            </div>

        </footer >
    );
};
