package com.banditdev.website.repository;

import com.banditdev.website.model.Request;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

// Kører mod en H2 database
@SpringBootTest
@ActiveProfiles("test")
@Transactional
class RequestRepositoryTest {

    @Autowired
    private RequestRepository requestRepository;

    private Request save(String firstName, boolean replied, LocalDateTime received) {
        Request r = new Request("Body", firstName, "Hansen", firstName.toLowerCase() + "@mail.dk", "12345678");
        r.setIsReplied(replied);
        r.setDateTimeReceived(received);
        return requestRepository.save(r);
    }

    @Test
    void findUnreplied_excludesRepliedAndSortsNewestFirst() {
        LocalDateTime now = LocalDateTime.of(2026, 11, 26, 12, 0);
        save("Old", false, now.minusDays(2));
        save("Newest", false, now);
        save("Replied", true, now.plusDays(1));
        save("Middle", false, now.minusDays(1));

        List<Request> result = requestRepository.findByIsRepliedFalseOrderByDateTimeReceivedDesc();

        assertThat(result)
                .extracting(Request::getCustomerFirstName)
                .containsExactly("Newest", "Middle", "Old");
    }

    @Test
    void findUnreplied_returnsEmptyWhenAllReplied() {
        save("Replied", true, LocalDateTime.now());

        assertThat(requestRepository.findByIsRepliedFalseOrderByDateTimeReceivedDesc()).isEmpty();
    }

    @Test
    void save_generatesIdAndDefaults() {
        Request saved = requestRepository.save(new Request("Body", "Anna", "Hansen", "anna@mail.dk", null));

        assertThat(saved.getRequestId()).isNotNull();
        assertThat(saved.getIsRead()).isFalse();
        assertThat(saved.getIsReplied()).isFalse();
    }
}
