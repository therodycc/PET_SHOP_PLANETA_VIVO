import { ButtonNetwork } from "@/components/common/button/button-network"
import { TitleText } from "@/components/common/title-text/title-text"
import { networks } from "@/shared/networks"
import { useCallback } from "react"
import { Location } from "../location"

export const NetworkSection = () => {

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
        <section id="network-section" className="contact container">
            <TitleText title={"Contáctenos a través"} />
            <div className="row gx-lg-0 gy-4">
                <div className="col-lg-4">

                    <div className="info-container d-flex flex-column align-items-center justify-content-center">
                        {networks.map(({ link, network, ...item }) =>
                            <ButtonNetwork
                                key={item.title}
                                {...item}
                                onClick={() => handleNetwork(link, item.title)}
                            />
                        )}

                    </div>
                </div>
                <div className="col-lg-8">
                    <Location />
                </div>
            </div>
        </section>
    )
}
