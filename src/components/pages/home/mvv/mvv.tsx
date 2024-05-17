import { TitleText } from "@/components/common/title-text/title-text";
import React from "react";

export const Mvv = () => {
    return (<>
        <section id="mvv-section" className="faq">
            <TitleText title={"Sobre nosotros"} />
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">

                    <div className="col-lg-6">
                        <div className="content px-xl-5">
                            <h3>Frequently Asked <strong>Questions</strong></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">
                            {data.map((item, index) => (<Component key={index} {...item} />))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </>
    );
};




export const Component = ({ src, title, description, reverse }: any) => {
    return <div className="accordion-item">
        <h3 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                <span className="num"></span>
                {title}
            </button>
        </h3>
        <div id="faq-content-1" className="accordion-collapse collapse show" data-bs-parent="#faqlist">
            <div className="accordion-body">
                {description}
            </div>
        </div>
    </div>

}


const data = [
    {
        src: "https://cdn-icons-png.flaticon.com/512/1628/1628441.png",
        title: "Misión",
        description: `Ofrecer todo lo necesario para el cuidado de tu mascota con amor, calidad y precio.`,
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1356/1356663.png",
        title: "Visión",
        description: `Ser la tienda de mascotas y agro   veterinaria más querida y confiable del país, reconocida por cumplir con los requisitos éticos, morales y legales.`,
        reverse: true
    },
    {
        src: "https://www.pngitem.com/pimgs/m/73-733899_mision-vision-y-valores-iconos-hd-png-download.png",
        title: "Valores",
        description: `Amor, cuidado, responsabilidad, honestidad y respeto.`
    },

]
