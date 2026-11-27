// Forsiden (forside-view) for SKJ renovering.
// Kræver css/theme.css og css/frontpage.css.
//
// Her ligger kun layoutet. Tekster, billeder og kontaktoplysninger står i
// content/frontpage-content.js, og slideshowet i components/slider.js.
//
// Brug:
//   import { renderFrontpage } from "./views/frontpage.js";
//   renderFrontpage(document.getElementById("app"));

import {
    COMPANY, REQUEST_URL, LOGO_LIGHT, NAV_LINKS, HEADER, HERO, HERO_SLIDES, STATEMENT,
    FLOW_STEPS, WOOD_SLIDES, SUSTAIN, PROJECTS, PROCESS, CTA, FOOTER,
} from "../content/frontpage-content.js";
import { sliderMarkup, initSliders } from "../components/slider.js";

function header() {
    const links = NAV_LINKS.map((l) => `<a href="${l.href}">${l.label}</a>`).join("");
    return `
    <header class="fp-header">
        <div class="container fp-header__inner">
            <a class="fp-logo" href="#"><img src="${LOGO_LIGHT}" alt="${COMPANY.name}" width="205" height="68"></a>
            <nav class="fp-nav" aria-label="Hovedmenu">
                ${links}
                <a class="btn btn--small" href="${REQUEST_URL}">${HEADER.buttonLabel}</a>
            </nav>
        </div>
    </header>`;
}

function hero() {
    return `
    <section class="fp-hero">
        <div class="fp-hero__text">
            <div class="eyebrow">${HERO.eyebrow}</div>
            <h1>${HERO.title}</h1>
            <p class="fp-hero__lead">${HERO.lead}</p>
            <div class="fp-hero__actions">
                <a class="btn" href="${REQUEST_URL}">${HERO.buttonLabel}</a>
                <a class="link-underline" href="#materialer">${HERO.linkLabel}</a>
            </div>
        </div>
        ${sliderMarkup(HERO_SLIDES, { className: "fp-hero__photo", label: HERO.sliderLabel })}
    </section>`;
}

function statement() {
    return `
    <section class="container fp-statement">
        <div class="eyebrow">${STATEMENT.eyebrow}</div>
        <h2>${STATEMENT.title}</h2>
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
    const stats = SUSTAIN.stats.map((s) => `
                    <div>
                        <div class="fp-stat__value">${s.value}</div>
                        <p class="fp-stat__label">${s.label}</p>
                    </div>`).join("");
    return `
    <section class="fp-sustain" id="materialer">
        <div class="container fp-sustain__grid">
            ${sliderMarkup(WOOD_SLIDES, { className: "fp-sustain__photo", label: SUSTAIN.sliderLabel })}
            <div>
                <div class="eyebrow">${SUSTAIN.eyebrow}</div>
                <h2>${SUSTAIN.title}</h2>
                <div class="fp-stats">${stats}
                </div>
                <a class="fp-sustain__more" href="#materialer">${SUSTAIN.moreLabel}</a>
            </div>
        </div>
    </section>`;
}

function projects() {
    const photos = PROJECTS.items.map((p) => `
            <figure class="fp-photo">
                <img src="${p.src}" alt="${p.alt}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async">
                <figcaption>${p.caption}</figcaption>
            </figure>`).join("");
    return `
    <section class="container fp-projects" id="projekter">
        <div class="fp-projects__head">
            <div>
                <h2>${PROJECTS.title}</h2>
                <p class="fp-projects__intro">${PROJECTS.intro}</p>
            </div>
            <a class="link-underline" href="#projekter">${PROJECTS.linkLabel}</a>
        </div>
        <div class="fp-projects__grid">${photos}
        </div>
    </section>`;
}

function process() {
    const steps = PROCESS.steps.map((s, i) => `
                <div>
                    <div class="fp-process__num">${i + 1}</div>
                    <h3>${s.title}</h3>
                    <p>${s.text}</p>
                </div>`).join("");
    return `
    <section class="fp-process" id="proces">
        <div class="container">
            <h2>${PROCESS.title}</h2>
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
                <h2>${CTA.title}</h2>
                <p class="fp-cta__text">${CTA.text}</p>
            </div>
            <a class="btn" href="${REQUEST_URL}">${CTA.buttonLabel}</a>
        </div>
    </section>`;
}

function footer() {
    return `
    <footer class="fp-footer">
        <div class="container">
            <div>
                <img class="fp-footer__logo" src="${LOGO_LIGHT}" alt="${COMPANY.name}" width="170" height="56">
                <p>${FOOTER.text}</p>
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
