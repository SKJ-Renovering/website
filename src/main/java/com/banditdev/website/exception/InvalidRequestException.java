package com.banditdev.website.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;

//ResponseStatus is only a placeholder for now, so it returns a 400 instead of 500 internal error until
//Global exception handling has been made
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidRequestException extends RuntimeException {
    private final Map<String, String> errors;

    public InvalidRequestException(Map<String, String> errors) {
        super("Invalid request");
        this.errors = Collections.unmodifiableMap(new LinkedHashMap<>(errors));
    }

    public Map<String, String> getErrors() {
        return errors;
    }
}
