import { Header } from "../layout/header/header";
import { Footer } from "./home/footer";
import { Mvv } from "./home/mvv/mvv";
import { NetworkSection } from "./home/network/network";
import { OurServices } from "./home/our-services";

export const Home = () => {
    return <>
        <Header />
        <OurServices />
        <Mvv />
        <NetworkSection />
        <Footer />
    </>
        ;
};
