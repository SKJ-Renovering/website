// Al tekst, alle billeder og kontaktoplysninger til forsiden ligger her.
// Ret tekster og billeder her, uden at røre ved layoutet i views/frontpage.js.

export const COMPANY = {
    name: "SKJ renovering",
    phone: "91 30 93 51",
    phoneHref: "tel:+4591309351",
    email: "nicholaiboggild@gmail.com",
    street: "Julius Thomsens Plads 4, kl. tv",
    city: "København",
    cvr: "30201774",
    hours: "Mandag – søndag kl. 08:00–17:00",
    areas: "Storkøbenhavn og Nordsjælland",
};

export const REQUEST_URL = "#/forespoergsel"; //TODO ret til den rigtige rute, når formularen findes

export const LOGO_LIGHT = "/frontend/images/logo-banner-light.svg"; // til mørk baggrund (header og footer)

export const NAV_LINKS = [
    { label: "Materialer", href: "#materialer" },
    { label: "Vores arbejde", href: "#projekter" },
    { label: "Sådan fungerer det", href: "#proces" },
    { label: "Kontakt", href: "#kontakt" },
];

export const HEADER = {
    buttonLabel: "Få et tilbud",
};

export const HERO = {
    eyebrow: `Familieejet · Over 30 års erfaring · ${COMPANY.city}`,
    title: "Tømrerarbejde med omtanke og kvalitet.",
    lead: `Vi hjælper med renovering, vinduer, terrasser og andet tømrerarbejde i ${COMPANY.areas}. Vi er en familieejet virksomhed med fokus på godt håndværk og ordentlige materialer.`,
    buttonLabel: "Få et uforpligtende tilbud",
    linkLabel: "Vores tilgang til materialer",
    sliderLabel: "Billeder af vores arbejde",
};

// Billeder til slideshows. Tilføj eller fjern linjer. width/height er billedets pixelstørrelse.
export const HERO_SLIDES = [
    { src: "/frontend/images/hero-1.jpg", width: 900, height: 1200, alt: "Sort træhus med nyt terrasseplankegulv i varm træfarve" },
    { src: "/frontend/images/hero-2.jpg", width: 1200, height: 900, alt: "Sort træhus med store glaspartier og træterrasse" },
    { src: "/frontend/images/hero-3.jpg", width: 900, height: 1200, alt: "Sort træhus med ny træterrasse og espalier" },
    { src: "/frontend/images/hero-4.jpg", width: 900, height: 1200, alt: "Sort træhus med lang terrasse og udsigt over haven" },
];

export const STATEMENT = {
    eyebrow: "Det lægger vi vægt på",
    title: "Vi går op i det, vi bygger – og det, vi bygger med.",
};

export const FLOW_STEPS = [
    { step: "01 · MATERIALER", title: "Træ med omtanke", text: "Vi bestræber os på at bruge træ fra ansvarligt skovbrug og vælger materialer med fokus på kvalitet og holdbarhed." },
    { step: "02 · HÅNDVÆRK", title: "Vi passer på materialerne", text: "Vi planlægger vores arbejde og forsøger at minimere spild, så materialerne bliver udnyttet bedst muligt." },
    { step: "03 · KVALITET", title: "Arbejdet skal være i orden", text: "Vi går op i detaljerne og sørger for, at arbejdet lever op til den aftale, vi har lavet med dig." },
    { step: "04 · ERFARING", title: "Løsninger, der holder", text: "Med over 30 års erfaring ved vi, hvor vigtigt det er at vælge de rigtige løsninger fra starten." },
];

export const WOOD_SLIDES = [
    { src: "/frontend/images/traevaerksted-1.jpg", width: 612, height: 408, alt: "Stabel af fældede træstammer under trækroner i solskin" },
    { src: "/frontend/images/traevaerksted-2.jpg", width: 678, height: 360, alt: "Store stabler af nysavet konstruktionstræ" },
    { src: "/frontend/images/traevaerksted-3.jpg", width: 612, height: 410, alt: "Rester af træ og afskær, som kan genbruges" },
];

export const SUSTAIN = {
    eyebrow: "Vores tilgang",
    title: "Gode materialer og solidt håndværk.",
    sliderLabel: "Billeder af træ og tømmer",
    moreLabel: "Læs mere om vores materialer",
    stats: [
        { value: "30+", label: "års erfaring med tømrerarbejde" },
        { value: "7", label: "Vi er tilgængelige alle ugens dage" },
        { value: "1", label: "Én fast kontaktperson gennem hele projektet" },
        { value: "Fast", label: "Du får en aftalt pris inden opstart" },
    ],
};

export const PROJECTS = {
    title: "Se vores arbejde",
    intro: "Her kan du se et udvalg af de projekter, vi har arbejdet på. Vi udfører både mindre tømreropgaver og større renoveringer.",
    linkLabel: "Se alle projekter",
    items: [
        { caption: "Totalentreprise", src: "/frontend/images/projekt-entreprise.jpg", width: 900, height: 1200, alt: "Renoveret køkken og spisestue med synlige træbjælker i loftet" },
        { caption: "Terrasser", src: "/frontend/images/projekt-terrasse.jpg", width: 900, height: 1200, alt: "Ny træterrasse under udførelse på et tag" },
        { caption: "Tømrerarbejde & nybygning", src: "/frontend/images/projekt-traearbejde.jpg", width: 540, height: 360, alt: "Tømrer, der monterer spær på et nyt tagværk" },
    ],
};

export const PROCESS = {
    title: "Fra første kontakt til færdigt projekt",
    steps: [
        { title: "Fortæl os om dit projekt", text: "Fortæl os, hvad du har brug for hjælp til. Du er også velkommen til at vedhæfte billeder." },
        { title: "Vi gennemgår din henvendelse", text: "Vi ser på din opgave og vender tilbage til dig." },
        { title: "Få et tilbud", text: "Du modtager et tilbud med pris og forventet tidsplan." },
        { title: "Vi går i gang", text: "Vi udfører arbejdet som aftalt og holder dig opdateret undervejs." },
    ],
};

export const CTA = {
    title: "Har du et projekt i tankerne?",
    text: "Skal du have renoveret, bygget en terrasse eller have hjælp til en anden tømreropgave? Så er du velkommen til at kontakte os. Vi tager gerne en snak om dit projekt.",
    buttonLabel: "Kontakt os for et tilbud",
};

export const FOOTER = {
    text: `Familieejet tømrervirksomhed med over 30 års erfaring. Vi hjælper med renovering og tømrerarbejde i ${COMPANY.areas}.`,
};
