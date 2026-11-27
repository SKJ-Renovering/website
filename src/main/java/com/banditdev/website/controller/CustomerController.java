package com.banditdev.website.controller;

import com.banditdev.website.DTO.CreateRequestDTO;
import com.banditdev.website.DTO.RequestResponseDTO;
import com.banditdev.website.service.RequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/requests")
public class CustomerController {
    private final RequestService requestService;

    public CustomerController(RequestService requestService) {
        this.requestService = requestService;
    }

    @PostMapping
    public ResponseEntity<RequestResponseDTO> createRequest(@RequestBody CreateRequestDTO dto) {
        RequestResponseDTO response = requestService.createRequest(dto);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(response.requestId())
                .toUri();

        return ResponseEntity.created(location).body(response);
    }
}
