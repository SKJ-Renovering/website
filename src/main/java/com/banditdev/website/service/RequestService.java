package com.banditdev.website.service;

import com.banditdev.website.model.Request;
import com.banditdev.website.repository.RequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;
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

    public List<Request> getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc() {
        return requestRepository.findByIsRepliedFalseOrderByDateTimeReceivedDesc();
    }

    public Optional<Request> getRequestById(Long id) {
        return requestRepository.findById(id);
    }
}
