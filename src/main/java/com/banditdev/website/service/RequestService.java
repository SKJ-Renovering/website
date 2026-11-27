package com.banditdev.website.service;

import com.banditdev.website.DTO.CreateRequestDTO;
import com.banditdev.website.DTO.RequestResponseDTO;
import com.banditdev.website.model.Request;
import com.banditdev.website.repository.RequestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
public class RequestService {

    private final RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public List<Request> getRequestsRepliedFalse() {
        return requestRepository.findByIsRepliedFalse();
    }

    public Optional<Request> getRequestById(Long id) {
        return requestRepository.findById(id);
    }

    @Transactional
    public RequestResponseDTO createRequest(CreateRequestDTO dto) {

        // TODO validate dto (step 3)

        Request request = new Request(
                trimOrNull(dto.requestBody()),
                trimOrNull(dto.customerFirstName()),
                trimOrNull(dto.customerLastName()),
                normalizeEmail(dto.customerEmail()),
                trimOrNull(dto.customerPhoneNumber())
        );
        Request saved = requestRepository.save(request);
        return RequestResponseDTO.from(saved);
    }

    private static String trimOrNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }

    private static String normalizeEmail(String email) {
        String trimmed = trimOrNull(email);
        return trimmed == null ? null : trimmed.toLowerCase(Locale.ROOT); // Locale.ROOT avoids locale-specific case rules (e.g. Turkish dotless i)
    }
}
