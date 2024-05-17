import { Services } from "@/components/common/card-options"
import { TitleText } from "@/components/common/title-text/title-text"
import React from 'react'

export const OurServices = () => {
    return (<>
        <HeaverWave />
        <section id="services-section" className="services sections-bg">
            <div className="container" data-aos="fade-up">
                <TitleText
                    title={"Nuestros Servicios"}
                    description={"Te brindamos el mejor cuidado para tus mascotas al mejor precio"}
                />
                <Services />
            </div>
        </section>
    </>
    )
}

const HeaverWave = () => {
    return (
        <img className="header-wave" src="assets/imgs/header-wave.svg" alt="" />
    )
}