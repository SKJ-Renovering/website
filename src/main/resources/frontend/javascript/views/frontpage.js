// Forsiden (forside-view) for SKJ renovering.
// Kræver css/theme.css og css/frontpage.css.
//
// Brug:
//   import { renderFrontpage } from "./views/frontpage.js";
//   renderFrontpage(document.getElementById("app"));
//
// Kontaktoplysninger står i COMPANY nedenfor. Ret dem ét sted.
// Tekst i [firkantede parenteser] er pladsholdere, som skal udfyldes
// med rigtige oplysninger, før siden går live.

const COMPANY = {
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

const REQUEST_URL = "#/forespoergsel"; //TODO ret til den rigtige rute, når formularen findes

const NAV_LINKS = [
    { label: "Materialer", href: "#materialer" },
    { label: "Vores arbejde", href: "#projekter" },
    { label: "Sådan fungerer det", href: "#proces" },
    { label: "Kontakt", href: "#kontakt" },
];

const FLOW_STEPS = [
    { step: "01 · MATERIALER", title: "Træ med omtanke", text: "Vi bestræber os på at bruge træ fra ansvarligt skovbrug og vælger materialer med fokus på kvalitet og holdbarhed." },
    { step: "02 · HÅNDVÆRK", title: "Vi passer på materialerne", text: "Vi planlægger vores arbejde og forsøger at minimere spild, så materialerne bliver udnyttet bedst muligt." },
    { step: "03 · KVALITET", title: "Arbejdet skal være i orden", text: "Vi går op i detaljerne og sørger for, at arbejdet lever op til den aftale, vi har lavet med dig." },
    { step: "04 · ERFARING", title: "Løsninger, der holder", text: "Med over 30 års erfaring ved vi, hvor vigtigt det er at vælge de rigtige løsninger fra starten." },
];

const STATS = [
    { value: "30+", label: "års erfaring med tømrerarbejde" },
    { value: "7", label: "Vi er tilgængelige alle ugens dage" },
    { value: "1", label: "Én fast kontaktperson gennem hele projektet" },
    { value: "Fast", label: "Du får en aftalt pris inden opstart" },
];

const PROJECTS = [
    { caption: "Totalentreprise", src: "/frontend/images/projekt-entreprise.jpg", alt: "Renoveret køkken og spisestue med synlige træbjælker i loftet" },
    { caption: "Terrasser", src: "/frontend/images/projekt-terrasse.jpg", alt: "Ny træterrasse under udførelse på et tag" },
    { caption: "Tømrerarbejde & nybygning", src: "/frontend/images/projekt-traearbejde.jpg", alt: "Tømrer, der monterer spær på et nyt tagværk" },
];

const PROCESS_STEPS = [
    { title: "Fortæl os om dit projekt", text: "Fortæl os, hvad du har brug for hjælp til. Du er også velkommen til at vedhæfte billeder." },
    { title: "Vi gennemgår din henvendelse", text: "Vi ser på din opgave og vender tilbage til dig." },
    { title: "Få et tilbud", text: "Du modtager et tilbud med pris og forventet tidsplan." },
    { title: "Vi går i gang", text: "Vi udfører arbejdet som aftalt og holder dig opdateret undervejs." },
];

// Billeder til slideshows. Tilføj eller fjern linjer her.
const SLIDE_INTERVAL_MS = 6000;

const HERO_SLIDES = [
    { src: "/frontend/images/hero-1.jpg", alt: "Sort træhus med nyt terrasseplankegulv i varm træfarve" },
    { src: "/frontend/images/hero-2.jpg", alt: "Sort træhus med store glaspartier og træterrasse" },
    { src: "/frontend/images/hero-3.jpg", alt: "Sort træhus med ny træterrasse og espalier" },
    { src: "/frontend/images/hero-4.jpg", alt: "Sort træhus med lang terrasse og udsigt over haven" },
];

const WOOD_SLIDES = [
    { src: "/frontend/images/traevaerksted-1.jpg", alt: "Stabel af fældede træstammer under trækroner i solskin" },
    { src: "/frontend/images/traevaerksted-2.jpg", alt: "Store stabler af nysavet konstruktionstræ" },
    { src: "/frontend/images/traevaerksted-3.jpg", alt: "Rester af træ og afskær, som kan genbruges" },
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
                <a class="btn btn--small" href="${REQUEST_URL}">Få et tilbud</a>
            </nav>
        </div>
    </header>`;
}

// Slideshow-markup. Klik på billedet viser det næste. Bruges af både hero og bæredygtighedssektionen.
function slider(slides, className, label) {
    const imgs = slides.map((s, i) => `
            <img class="fp-slider__img${i === 0 ? " is-active" : ""}" src="${s.src}" alt="${s.alt}" decoding="async">`).join("");
    const dots = slides.map((s, i) => `
                <button type="button" class="fp-slider__dot${i === 0 ? " is-active" : ""}" data-slide="${i}" aria-label="Vis billede ${i + 1} af ${slides.length}"><span></span></button>`).join("");
    return `
        <div class="fp-slider ${className}" data-slider tabindex="0" role="group" aria-roledescription="karrusel" aria-label="${label}. Klik for næste billede.">${imgs}
            <div class="fp-slider__dots">${dots}
            </div>
        </div>`;
}

let sliderTimers = [];

// Starter alle slideshows i root. Skifter automatisk, og et klik (eller piletaster) går til næste/forrige.
function initSliders(root) {
    sliderTimers.forEach(clearInterval);
    sliderTimers = [];

    root.querySelectorAll("[data-slider]").forEach((el, index) => {
        const imgs = [...el.querySelectorAll(".fp-slider__img")];
        const dots = [...el.querySelectorAll(".fp-slider__dot")];
        if (imgs.length < 2) return;
        let current = 0;
        let timer = null;

        const show = (n) => {
            current = (n + imgs.length) % imgs.length;
            imgs.forEach((img, i) => img.classList.toggle("is-active", i === current));
            dots.forEach((d, i) => {
                d.classList.toggle("is-active", i === current);
                d.setAttribute("aria-current", i === current ? "true" : "false");
            });
        };

        // Starter (eller nulstiller) den automatiske timer. Den skifter også, mens musen er over billedet.
        const restart = () => {
            clearInterval(timer);
            timer = setInterval(() => { if (!document.hidden) show(current + 1); }, SLIDE_INTERVAL_MS + index * 1500);
            sliderTimers.push(timer);
        };

        el.addEventListener("click", (e) => {
            const dot = e.target.closest(".fp-slider__dot");
            show(dot ? Number(dot.dataset.slide) : current + 1);
            restart();
        });
        el.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") { e.preventDefault(); show(current + 1); restart(); }
            if (e.key === "ArrowLeft") { e.preventDefault(); show(current - 1); restart(); }
        });

        // Forudindlæs de øvrige billeder, så skiftet ikke hakker.
        imgs.slice(1).forEach((img) => { const pre = new Image(); pre.src = img.src; });
        show(0);
        restart();
    });
}

function hero() {
    return `
    <section class="fp-hero">
        <div class="fp-hero__text">
            <div class="eyebrow">Familieejet · Over 30 års erfaring · ${COMPANY.city}</div>
            <h1>Tømrerarbejde med omtanke og kvalitet.</h1>
            <p class="fp-hero__lead">Vi hjælper med renovering, vinduer, terrasser og andet tømrerarbejde i ${COMPANY.areas}. Vi er en familieejet virksomhed med fokus på godt håndværk og ordentlige materialer.</p>
            <div class="fp-hero__actions">
                <a class="btn" href="${REQUEST_URL}">Få et uforpligtende tilbud</a>
                <a class="link-underline" href="#materialer">Vores tilgang til materialer</a>
            </div>
        </div>
        ${slider(HERO_SLIDES, "fp-hero__photo", "Billeder af vores arbejde")}
    </section>`;
}

function statement() {
    return `
    <section class="container fp-statement">
        <div class="eyebrow">Det lægger vi vægt på</div>
        <h2>Vi går op i det, vi bygger – og det, vi bygger med.</h2>
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
    <section class="fp-sustain" id="materialer">
        <div class="container fp-sustain__grid">
            ${slider(WOOD_SLIDES, "fp-sustain__photo", "Billeder af træ og tømmer")}
            <div>
                <div class="eyebrow">Vores tilgang</div>
                <h2>Gode materialer og solidt håndværk.</h2>
                <div class="fp-stats">${stats}
                </div>
                <a class="fp-sustain__more" href="#materialer">Læs mere om vores materialer</a>
            </div>
        </div>
    </section>`;
}

function projects() {
    const photos = PROJECTS.map((p) => `
            <figure class="fp-photo">
                <img src="${p.src}" alt="${p.alt}" loading="lazy" decoding="async">
                <figcaption>${p.caption}</figcaption>
            </figure>`).join("");
    return `
    <section class="container fp-projects" id="projekter">
        <div class="fp-projects__head">
            <div>
                <h2>Se vores arbejde</h2>
                <p class="fp-projects__intro">Her kan du se et udvalg af de projekter, vi har arbejdet på. Vi udfører både mindre tømreropgaver og større renoveringer.</p>
            </div>
            <a class="link-underline" href="#projekter">Se alle projekter</a>
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
    <section class="fp-process" id="proces">
        <div class="container">
            <h2>Fra første kontakt til færdigt projekt</h2>
            <div class="fp-process__grid">${steps}
            </div>
        </div>
    </section>`;
}

function cta() {
    return `
    <section class="fp-cta" id="kontakt">
        <div class="container">
            <div>
                <h2>Har du et projekt i tankerne?</h2>
                <p class="fp-cta__text">Skal du have renoveret, bygget en terrasse eller have hjælp til en anden tømreropgave? Så er du velkommen til at kontakte os. Vi tager gerne en snak om dit projekt.</p>
            </div>
            <a class="btn" href="${REQUEST_URL}">Kontakt os for et tilbud</a>
        </div>
    </section>`;
}

function footer() {
    return `
    <footer class="fp-footer">
        <div class="container">
            <div>
                <img class="fp-footer__logo" src="${LOGO_LIGHT}" alt="SKJ renovering" width="170" height="56">
                <p>Familieejet tømrervirksomhed med over 30 års erfaring. Vi hjælper med renovering og tømrerarbejde i ${COMPANY.areas}.</p>
            </div>
            <address>${COMPANY.street}<br>${COMPANY.city}<br>CVR ${COMPANY.cvr}</address>
            <address><a href="${COMPANY.phoneHref}">${COMPANY.phone}</a><br><a href="mailto:${COMPANY.email}">${COMPANY.email}</a><br>${COMPANY.hours}</address>
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
    initSliders(root);
}
