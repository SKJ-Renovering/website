package com.banditdev.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutingController {

    // Fanger alle endpoints der bliver ramt direkte i addresse barren, og sender til index.html som router til den rigtige side.
    @GetMapping({"/", "/dashboard"})
    public String frontend() {
        return "forward:/frontend/index.html";
    }
}
