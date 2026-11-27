// Genbrugelig billed-slideshow-komponent.
//
// Brug:
//   import { sliderMarkup, initSliders, destroySliders } from "../components/slider.js";
//   html += sliderMarkup(slides, { className: "min-klasse", label: "Beskrivelse" });
//   ... root.innerHTML = html;
//   initSliders(root);
//
// Hvert slide er { src, alt, width, height }. Kræver .fp-slider-reglerne i css/frontpage.css.
// Slideshowet skifter automatisk, men kan sættes på pause med knappen. Et klik på billedet går til det næste,
// pilene på tastaturet går frem og tilbage. Alle timere ryddes op, når siden forlades eller tegnes igen.

const INTERVAL_MS = 6000;

let cleanups = [];

export function sliderMarkup(slides, { className = "", label = "Billeder" } = {}) {
    const imgs = slides.map((s, i) => `
            <img class="fp-slider__img${i === 0 ? " is-active" : ""}" src="${s.src}" alt="${s.alt}"
                 width="${s.width}" height="${s.height}" decoding="async">`).join("");
    const dots = slides.map((s, i) => `
                <button type="button" class="fp-slider__dot${i === 0 ? " is-active" : ""}" data-slide="${i}" aria-label="Vis billede ${i + 1} af ${slides.length}"><span></span></button>`).join("");
    return `
        <div class="fp-slider ${className}" data-slider tabindex="0" role="group" aria-roledescription="karrusel" aria-label="${label}. Klik for næste billede.">${imgs}
            <div class="fp-slider__dots">
                <button type="button" class="fp-slider__toggle" aria-label="Sæt slideshow på pause" aria-pressed="false"><span class="fp-slider__icon"></span></button>${dots}
            </div>
        </div>`;
}

// Stopper alle slideshows og fjerner deres timere. Kaldes automatisk af initSliders.
export function destroySliders() {
    cleanups.forEach((fn) => fn());
    cleanups = [];
}

export function initSliders(root) {
    destroySliders();

    root.querySelectorAll("[data-slider]").forEach((el, index) => {
        const imgs = [...el.querySelectorAll(".fp-slider__img")];
        const dots = [...el.querySelectorAll(".fp-slider__dot")];
        const toggle = el.querySelector(".fp-slider__toggle");
        if (imgs.length < 2) {
            toggle?.remove();
            return;
        }

        let current = 0;
        let playing = true;
        let timer = null;

        const show = (n) => {
            current = (n + imgs.length) % imgs.length;
            imgs.forEach((img, i) => img.classList.toggle("is-active", i === current));
            dots.forEach((d, i) => {
                d.classList.toggle("is-active", i === current);
                d.setAttribute("aria-current", i === current ? "true" : "false");
            });
        };

        const stop = () => {
            clearInterval(timer);
            timer = null;
        };

        // (Gen)starter timeren. Slideshowene får lidt forskellig tid, så de ikke skifter på samme tid.
        const start = () => {
            stop();
            if (!playing) return;
            timer = setInterval(() => {
                if (!el.isConnected) return stop(); // siden er skiftet væk: ryd op
                if (!document.hidden) show(current + 1);
            }, INTERVAL_MS + index * 1500);
        };

        const setPlaying = (value) => {
            playing = value;
            el.classList.toggle("is-paused", !playing);
            toggle.setAttribute("aria-pressed", String(!playing));
            toggle.setAttribute("aria-label", playing ? "Sæt slideshow på pause" : "Afspil slideshow");
            // Skærmlæsere får kun besked om skift, når slideshowet ikke kører af sig selv.
            el.setAttribute("aria-live", playing ? "off" : "polite");
            start();
        };

        const onClick = (e) => {
            if (e.target.closest(".fp-slider__toggle")) return setPlaying(!playing);
            const dot = e.target.closest(".fp-slider__dot");
            show(dot ? Number(dot.dataset.slide) : current + 1);
            start();
        };

        const onKeydown = (e) => {
            if (e.target !== el) return; // knapperne håndterer selv Enter og mellemrum
            if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show(current + 1);
                start();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                show(current - 1);
                start();
            }
        };

        el.addEventListener("click", onClick);
        el.addEventListener("keydown", onKeydown);

        // Forudindlæs de øvrige billeder, så skiftet ikke hakker.
        imgs.slice(1).forEach((img) => { new Image().src = img.src; });

        show(0);
        setPlaying(true);

        cleanups.push(() => {
            stop();
            el.removeEventListener("click", onClick);
            el.removeEventListener("keydown", onKeydown);
        });
    });
}
