package com.banditdev.website.DTO;

import com.banditdev.website.model.Request;

import java.time.LocalDateTime;

public record RequestResponseDTO(Long requestId, LocalDateTime dateTimeReceived) {

    public static RequestResponseDTO from(Request request) {
        return new RequestResponseDTO(request.getRequestId(), request.getDateTimeReceived());
    }
}
