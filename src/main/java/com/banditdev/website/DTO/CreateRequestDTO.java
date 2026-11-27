package com.banditdev.website.DTO;

public record CreateRequestDTO(String customerFirstName,
                                String customerLastName,
                                String customerEmail,
                                String customerPhoneNumber,
                                String requestBody) {
}
