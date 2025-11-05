
interface Tarjeta {
    title: string;
    description: string;
    orderLink: string;
    infoLink: string;
}


const tarjetaResidencial: Tarjeta = {
    title: "RESIDENCIAL",
    description: "Conexión en el hogar.<br>A partir de $35.000/mes.",
    orderLink: "/Orden",
    infoLink: "/Residencial"
};

const tarjetaItinerante: Tarjeta = {
    title: "ITINERANTE",
    description: "Conéctese en cualquier destino, cobertura en más de 100 mercados.<br>A partir de $45.000/mes.",
    orderLink: "/Orden",
    infoLink: "/Itinerante"
};


export function getHomePageData() {
    return {
        pageTitle: "Starlink - Internet de Alta Velocidad",
        tarjetas: [tarjetaResidencial, tarjetaItinerante]
    };
}

