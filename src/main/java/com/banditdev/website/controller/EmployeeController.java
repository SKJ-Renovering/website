package com.banditdev.website.controller;

import com.banditdev.website.model.Request;
import com.banditdev.website.service.RequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/employee")
public class EmployeeController {

    private final RequestService requestService;

    public EmployeeController(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/requests")
    public ResponseEntity<List<Request>> getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc() {
        return ResponseEntity.ok(requestService.getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc());
    }
}
