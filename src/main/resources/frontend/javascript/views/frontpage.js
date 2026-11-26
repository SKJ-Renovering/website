// Forsiden (forside-view) for SKJ renovering.
// Kræver css/theme.css og css/frontpage.css.
//
// Brug:
//   import { renderFrontpage } from "./views/frontpage.js";
//   renderFrontpage(document.getElementById("app"));
//
// Tekst i [firkantede parenteser] er pladsholdere, som skal udfyldes
// med rigtige oplysninger, før siden går live.

const REQUEST_URL = "#/forespoergsel"; // ret til den rigtige rute, når formularen findes

const NAV_LINKS = [
    { label: "Om os", href: "#om-os" },
    { label: "Bæredygtighed", href: "#baeredygtighed" },
    { label: "Projekter", href: "#projekter" },
    { label: "Spørgsmål", href: "#sporgsmaal" },
];

const FLOW_STEPS = [
    { step: "01 · SKOVEN", title: "Ansvarligt indkøbt", text: "[Hvor træet kommer fra, og hvilke certificeringer det har.]" },
    { step: "02 · VÆRKSTEDET", title: "Drevet af grøn energi", text: "[Hvordan værkstedet forsynes, og hvordan spild begrænses.]" },
    { step: "03 · DIT HJEM", title: "Lavet til at holde", text: "[Holdbare overflader og naturlige materialer med lav emission.]" },
    { step: "04 · ÅRTIER", title: "Reparér, skift ikke ud", text: "[Hvordan I designer til reparation og lang levetid.]" },
];

const STATS = [
    { value: "[XX%]", label: "af vores træ er certificeret bæredygtigt" },
    { value: "[XX%]", label: "af værkstedets afskær genbruges" },
    { value: "[XX%]", label: "grøn energi i værkstedet" },
    { value: "30+", label: "års erfaring med at bygge, så det holder" },
];

const PROJECTS = [
    "Køkken · eg, kalkpuds, naturlig olie",
    "Stue · indbyggede hylder",
    "Trappe · renoveret, ikke udskiftet",
];

const PROCESS_STEPS = [
    { title: "Send en forespørgsel", text: "Beskriv dit projekt og vedhæft billeder." },
    { title: "Vi læser dem alle", text: "En rigtig person gennemgår din forespørgsel." },
    { title: "Modtag et tilbud", text: "En klar pris og tidsplan på mail." },
    { title: "Vi bygger det", text: "Omhyggeligt arbejde med høj kvalitet." },
];

const LOGO_LIGHT = "/frontend/images/logo-banner-light.svg"; // til mørk baggrund (header og footer)

function header() {
    const links = NAV_LINKS.map((l) => `<a href="${l.href}">${l.label}</a>`).join("");
    return `
    <header class="fp-header">
        <div class="container fp-header__inner">
            <a class="fp-logo" href="#"><img src="${LOGO_LIGHT}" alt="SKJ renovering" width="205" height="68"></a>
            <nav class="fp-nav" aria-label="Hovedmenu">
                ${links}
                <a class="btn btn--small" href="${REQUEST_URL}">Bed om et tilbud</a>
            </nav>
        </div>
    </header>`;
}

function hero() {
    return `
    <section class="fp-hero">
        <div class="fp-hero__text">
            <div class="eyebrow">Familieejet · Danmark · 30+ år</div>
            <h1>Renovering med respekt for skoven.</h1>
            <p class="fp-hero__lead">Køkkener, stuer og hele hjem, skabt af én familie af træ, vi kan spore, i et værksted drevet af grøn energi.</p>
            <div class="fp-hero__actions">
                <a class="btn" href="${REQUEST_URL}">Bed om et tilbud</a>
                <a class="link-underline" href="#baeredygtighed">Vores bæredygtige tilgang</a>
            </div>
        </div>
        <div class="fp-photo fp-hero__photo" role="img" aria-label="Pladsholder til heltefoto">Heltefoto: varm egetræsstue, blødt dagslys, en plante ved vinduet</div>
    </section>`;
}

function statement() {
    return `
    <section class="container fp-statement">
        <div class="eyebrow">Hvorfor det betyder noget</div>
        <h2>Et hjem skal holde i generationer. Det skal skovene, det kommer fra, også.</h2>
    </section>`;
}

function flow() {
    const items = FLOW_STEPS.map((s) => `
            <div class="fp-flow__item">
                <div class="fp-flow__step">${s.step}</div>
                <h3>${s.title}</h3>
                <p>${s.text}</p>
            </div>`).join("");
    return `
    <section class="container fp-flow">
        <div class="fp-flow__grid">${items}
        </div>
    </section>`;
}

function sustainability() {
    const stats = STATS.map((s) => `
                    <div>
                        <div class="fp-stat__value">${s.value}</div>
                        <p class="fp-stat__label">${s.label}</p>
                    </div>`).join("");
    return `
    <section class="fp-sustain" id="baeredygtighed">
        <div class="container fp-sustain__grid">
            <div class="fp-photo fp-photo--dark fp-sustain__photo" role="img" aria-label="Pladsholder til foto af værksted">Foto: træ stablet i værkstedet, savsmuld i lyset</div>
            <div>
                <div class="eyebrow">Vores bæredygtige praksis</div>
                <h2>Mindre spild. Bedre træ. Længere levetid.</h2>
                <div class="fp-stats">${stats}
                </div>
                <a class="fp-sustain__more" href="#baeredygtighed">Læs om vores materialer</a>
            </div>
        </div>
    </section>`;
}

function projects() {
    const photos = PROJECTS.map((caption) => `
            <div class="fp-photo" role="img" aria-label="Pladsholder til projektfoto">${caption}</div>`).join("");
    return `
    <section class="container fp-projects" id="projekter">
        <div class="fp-projects__head">
            <h2>Seneste projekter</h2>
            <a class="link-underline" href="#projekter">Alle projekter</a>
        </div>
        <div class="fp-projects__grid">${photos}
        </div>
    </section>`;
}

function process() {
    const steps = PROCESS_STEPS.map((s, i) => `
                <div>
                    <div class="fp-process__num">${i + 1}</div>
                    <h3>${s.title}</h3>
                    <p>${s.text}</p>
                </div>`).join("");
    return `
    <section class="fp-process">
        <div class="container">
            <h2>Sådan fungerer det</h2>
            <div class="fp-process__grid">${steps}
            </div>
        </div>
    </section>`;
}

function cta() {
    return `
    <section class="fp-cta">
        <div class="container">
            <h2>Planlægger du en renovering? Lad os bygge noget, der holder.</h2>
            <a class="btn" href="${REQUEST_URL}">Bed om et tilbud</a>
        </div>
    </section>`;
}

function footer() {
    return `
    <footer class="fp-footer">
        <div class="container">
            <div>
                <img class="fp-footer__logo" src="${LOGO_LIGHT}" alt="SKJ renovering" width="170" height="56">
                <p>Familieejet tømrer- og renoveringsfirma, Danmark.</p>
            </div>
            <address>[Adresse]<br>[Postnummer, by]<br>CVR [nummer]</address>
            <address>[Telefon]<br>[E-mail]<br>Man–fre [åbningstid]</address>
        </div>
    </footer>`;
}

export function renderFrontpage(root) {
    root.innerHTML = [
        header(),
        hero(),
        statement(),
        flow(),
        sustainability(),
        projects(),
        process(),
        cta(),
        footer(),
    ].join("\n");
}
