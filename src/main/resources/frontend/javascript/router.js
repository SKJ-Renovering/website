"use strict";

import { renderDashboard } from "./views/dashboard.js";

// Kun rute lavet til dashboard, skal tilføjes til alle sider der bliver tilføjet
// (husk også at tilføje stien i RoutingController)
const routes = [
    { path: "/dashboard", view: renderDashboard, title: "Dashboard" },
];

// Sti der bruges når ingen rute matcher - fx "/"
//Skal ændres til login, når Spring security er med.
const defaultPath = "/dashboard";

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

    document.title = `SKJ Renovering – ${route.title}`;
    await route.view(app);
}
