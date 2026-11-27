package com.banditdev.website.service;

import com.banditdev.website.DTO.CreateRequestDTO;
import com.banditdev.website.exception.InvalidRequestException;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.regex.Pattern;

@Component
public class RequestValidator {
    private static final int MAX_NAME_LENGTH = 100;
    private static final int MAX_EMAIL_LENGTH = 254;
    private static final int MAX_MESSAGE_LENGTH = 5000;

    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[^@\\s]+@[^@\\s.]+(?:\\.[^@\\s.]+)+$");
    private static final Pattern PHONE_PATTERN = Pattern.compile("^\\+?[0-9 ]+$");
    private static final int MIN_PHONE_DIGITS = 8;
    private static final int MAX_PHONE_DIGITS = 15;
    private static final int MAX_PHONE_LENGTH = 30;

    public void validate(CreateRequestDTO dto) {
        if (dto == null) {
            throw new InvalidRequestException(Map.of("request", "Request body is missing"));
        }
        Map<String, String> errors = new LinkedHashMap<>();

        requireText(errors, "customerFirstName", dto.customerFirstName(), MAX_NAME_LENGTH);
        requireText(errors, "customerLastName", dto.customerLastName(), MAX_NAME_LENGTH);
        requireText(errors, "customerEmail", dto.customerEmail(), MAX_EMAIL_LENGTH);
        requireText(errors, "requestBody", dto.requestBody(), MAX_MESSAGE_LENGTH);

        if (!errors.containsKey("customerEmail")) {
            checkEmail(errors, "customerEmail", dto.customerEmail());
        }

        checkPhone(errors, "customerPhoneNumber", dto.customerPhoneNumber());

        if (!errors.isEmpty()) {
            throw new InvalidRequestException(errors);
        }
    }

    private void requireText(Map<String, String> errors, String field, String value, int maxLength) {
        if (value == null || value.isBlank()) {
            errors.put(field, "This field is required");
        } else if (value.trim().length() > maxLength) {
            errors.put(field, "Must be at most " + maxLength + " characters");
        }
    }

    private void checkEmail(Map<String, String> errors, String field, String value) {
        if (value == null) {
            return;
        }
        if (!EMAIL_PATTERN.matcher(value.trim()).matches()) {
            errors.put(field, "Please enter a valid email address");
        }
    }

    private void checkPhone(Map<String, String> errors, String field, String value) {
        if (value == null || value.isBlank()) {
            return; // optional field
        }
        String trimmed = value.trim();
        if (trimmed.length() > MAX_PHONE_LENGTH || !PHONE_PATTERN.matcher(trimmed).matches()) {
            errors.put(field, "Please enter a valid phone number");
            return;
        }
        int digits = trimmed.replace(" ", "").replace("+", "").length();
        if (digits < MIN_PHONE_DIGITS || digits > MAX_PHONE_DIGITS) {
            errors.put(field, "Please enter a valid phone number");
        }
    }
}
