package com.banditdev.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutingController {

    // Alle sider leveres af den samme index.html. Routeren i frontend/javascript/router.js
    // vælger, hvilken side der vises. Tilføj nye stier her og i routes i router.js.
    // (frontend-filerne ligger under /frontend/**, jf. application.properties)
    @GetMapping({"/", "/dashboard"})
    public String page() {
        return "forward:/frontend/index.html";
    }
}
