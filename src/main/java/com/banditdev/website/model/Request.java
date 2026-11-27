package com.banditdev.website.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requestId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String requestBody;

    @Column(nullable = false)
    private String customerFirstName;

    @Column(nullable = false)
    private String customerLastName;

    @Column(nullable = false)
    private String customerEmail;

    private String customerPhoneNumber;

    @Column(nullable = false)
    private Boolean isRead = false;

    @Column(nullable = false)
    private Boolean isReplied = false;

    @Column(nullable = false, updatable = false)
    private LocalDateTime dateTimeReceived;

    public Request() {
    }

    public Request(String requestBody, String customerFirstName,
                   String customerLastName, String customerEmail,
                   String customerPhoneNumber) {

        this.requestBody = requestBody;
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
        this.customerEmail = customerEmail;
        this.customerPhoneNumber = customerPhoneNumber;
        this.isRead = false;
        this.isReplied = false;
        this.dateTimeReceived = LocalDateTime.now();
    }

    // Getters and setters
    public Long getRequestId() {
        return requestId;
    }

    public String getRequestBody() {
        return requestBody;
    }

    public void setRequestBody(String requestBody) {
        this.requestBody = requestBody;
    }

    public String getCustomerFirstName() {
        return customerFirstName;
    }

    public void setCustomerFirstName(String customerFirstName) {
        this.customerFirstName = customerFirstName;
    }

    public String getCustomerLastName() {
        return customerLastName;
    }

    public void setCustomerLastName(String customerLastName) {
        this.customerLastName = customerLastName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerPhoneNumber() {
        return customerPhoneNumber;
    }

    public void setCustomerPhoneNumber(String customerPhoneNumber) {
        this.customerPhoneNumber = customerPhoneNumber;
    }

    public Boolean getIsRead() {
        return isRead;
    }

    public void setIsRead(Boolean isRead) {
        this.isRead = isRead;
    }

    public Boolean getIsReplied() {
        return isReplied;
    }

    public void setIsReplied(Boolean isReplied) {
        this.isReplied = isReplied;
    }

    public LocalDateTime getDateTimeReceived() {
        return dateTimeReceived;
    }

    // Leaves out customer personal data (name, email, phone, message) so it never ends up in logs.
    @Override
    public String toString() {
        return "Request{" +
                "requestId=" + requestId +
                ", isRead=" + isRead +
                ", isReplied=" + isReplied +
                ", dateTimeReceived=" + dateTimeReceived +
                '}';
    }
}
