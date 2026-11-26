package com.banditdev.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutingController {

    // Standard-endpoint: viser forsiden på http://localhost:8080/
    // (frontend-filerne ligger under /frontend/**, jf. application.properties)
    @GetMapping("/")
    public String frontpage() {
        return "forward:/frontend/index.html";
    }
}
