"use strict";

import { renderFrontpage } from "./views/frontpage.js";
import { renderDashboard } from "./views/dashboard.js";

// Alle sider skal have en rute her
// (husk også at tilføje stien i RoutingController)
const routes = [
    { path: "/", view: renderFrontpage, title: "Forside" },
    { path: "/dashboard", view: renderDashboard, title: "Dashboard" },
];

// Sti der bruges når ingen rute matcher - forsiden.
//TODO Skal evt. ændres til login, når Spring security er med. evt aftalt noget andet?
const defaultPath = "/";

export function navigateTo(path) {
    if (path !== window.location.pathname) {
        window.history.pushState(null, "", path);
    }
    render();
}

export function startRouter() {
    window.addEventListener("popstate", render);
    render();
}

async function render() {
    const app = document.getElementById("app");
    const route = routes.find(route => route.path === window.location.pathname);

    if (!route) {
        window.history.replaceState(null, "", defaultPath);
        render();
        return;
    }

    document.title = route.path === "/" ? "SKJ renovering" : `SKJ Renovering – ${route.title}`;
    await route.view(app);
}
