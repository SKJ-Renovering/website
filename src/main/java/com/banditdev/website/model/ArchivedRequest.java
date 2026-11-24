
package com.banditdev.website.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "archived_requests")
public class ArchivedRequest {

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

    private LocalDateTime dateTimeReceived;

    private LocalDateTime dateTimeReplied;

    private Long employeeId;


    public ArchivedRequest() {
    }

    public ArchivedRequest(Long employeeId, LocalDateTime dateTimeReplied,
                           LocalDateTime dateTimeReceived, String customerPhoneNumber,
                           String customerEmail, String customerLastName,
                           String customerFirstName, String requestBody) {

        this.employeeId = employeeId;
        this.dateTimeReplied = dateTimeReplied;
        this.dateTimeReceived = dateTimeReceived;
        this.customerPhoneNumber = customerPhoneNumber;
        this.customerEmail = customerEmail;
        this.customerLastName = customerLastName;
        this.customerFirstName = customerFirstName;
        this.requestBody = requestBody;
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

    public LocalDateTime getDateTimeReceived() {
        return dateTimeReceived;
    }

    public void setDateTimeReceived(LocalDateTime dateTimeReceived) {
        this.dateTimeReceived = dateTimeReceived;
    }

    public LocalDateTime getDateTimeReplied() {
        return dateTimeReplied;
    }

    public void setDateTimeReplied(LocalDateTime dateTimeReplied) {
        this.dateTimeReplied = dateTimeReplied;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    @Override
    public String toString() {
        return "ArchivedRequest{" +
                "requestBody='" + requestBody + '\'' +
                ", customerFirstName='" + customerFirstName + '\'' +
                ", customerLastName='" + customerLastName + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", customerPhoneNumber='" + customerPhoneNumber + '\'' +
                ", dateTimeReceived=" + dateTimeReceived +
                ", dateTimeReplied=" + dateTimeReplied +
                ", employeeId=" + employeeId +
                '}';
    }
}
