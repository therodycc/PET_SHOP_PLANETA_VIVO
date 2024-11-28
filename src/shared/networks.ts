
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt, faMobilePhone, faPhone } from "@fortawesome/free-solid-svg-icons"

export const networks = [
    {
        title: "Facebook",
        network: "facebook",
        description: "epagriculard",
        icon: faFacebookF,
        link: "https://www.facebook.com/epagriculard",
    },
    {
        title: "Instagram",
        network: "instagram",
        description: "@epagriculard",
        icon: faInstagram,
        link: "https://www.instagram.com/epagriculard",
    },
    {
        title: "WhatsApp",
        network: "whatsapp",
        description: "+1 (829) 458-7526",
        icon: faWhatsapp,
        link: "https://wa.me/18294587526",
    },
    {
        title: "Cel",
        network: "call",
        description: "+1 (829) 458-7526",
        icon: faMobileAlt,
        link: "",
    },
    {
        title: "Tel",
        network: "tell",
        description: "+1 (809) 414-5572",
        icon: faPhone,
        link: "",
    },
]