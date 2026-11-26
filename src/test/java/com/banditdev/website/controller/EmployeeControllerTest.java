package com.banditdev.website.controller;

import com.banditdev.website.model.Request;
import com.banditdev.website.service.RequestService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// Tester kun web-laget, og RequestService bliver mocket.
@WebMvcTest(EmployeeController.class)
class EmployeeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private RequestService requestService;

    @Test
    void getRequests_returnsJsonWithCorrectInformation() throws Exception {
        Request r = new Request("Body", "Anna", "Hansen", "anna@mail.dk", "12345678");
        r.setDateTimeReceived(LocalDateTime.of(2026, 11, 26, 10, 0));
        when(requestService.getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc()).thenReturn(List.of(r));

        mockMvc.perform(get("/employee/requests"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith("application/json"))
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].customerFirstName").value("Anna"))
                .andExpect(jsonPath("$[0].customerLastName").value("Hansen"))
                .andExpect(jsonPath("$[0].customerEmail").value("anna@mail.dk"))
                .andExpect(jsonPath("$[0].customerPhoneNumber").value("12345678"))
                .andExpect(jsonPath("$[0].dateTimeReceived").value("2026-11-26T10:00:00"))
                .andExpect(jsonPath("$[0].isReplied").value(false));

        verify(requestService).getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc();
    }

    @Test
    void getRequests_returnsEmptyJson() throws Exception {
        when(requestService.getRequestsByIsRepliedFalseOrderByDateTimeReceivedDesc()).thenReturn(List.of());

        mockMvc.perform(get("/employee/requests"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }
}
