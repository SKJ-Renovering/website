package com.banditdev.website.service;

import com.banditdev.website.model.Request;
import com.banditdev.website.repository.RequestRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

// Unit-tests, repository er mocket.
@ExtendWith(MockitoExtension.class)
class RequestServiceTest {

    @Mock
    private RequestRepository requestRepository;

    @InjectMocks
    private RequestService requestService;

    private Request request(String firstName) {
        return new Request("Body", firstName, "Hansen", firstName.toLowerCase() + "@mail.dk", "12345678");
    }

    @Test
    void getAllRequests() {
        List<Request> requests = List.of(request("Anna"), request("Bo"));
        when(requestRepository.findAll()).thenReturn(requests);

        assertThat(requestService.getAllRequests()).isEqualTo(requests);
    }

    @Test
    void getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc() {
        List<Request> requests = List.of(request("Anna"));
        when(requestRepository.findByIsRepliedFalseOrderByDateTimeReceivedDesc()).thenReturn(requests);

        assertThat(requestService.getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc()).isEqualTo(requests);
    }

    @Test
    void getRequestById() {
        Request r = request("Anna");
        when(requestRepository.findById(1L)).thenReturn(Optional.of(r));

        assertThat(requestService.getRequestById(1L)).contains(r);
    }
}
