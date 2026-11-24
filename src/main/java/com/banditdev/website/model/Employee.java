package com.banditdev.website.model;

import jakarta.persistence.*;

@Entity
public class Employee {
    public Employee(String employeeUsername, String employeePassword, String employeeFirstName, String employeeLastName, String employeePhone, String employeeMail) {
        this.employeeUsername = employeeUsername;
        this.employeePassword = employeePassword;
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.employeePhone = employeePhone;
        this.employeeMail = employeeMail;
    }

    public Employee() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    @Column(unique = true, nullable = false)
    private String employeeUsername;

    @Column(unique = true, nullable = false)
    private String employeePassword;

    private String employeeFirstName;
    private String employeeLastName;
    private String employeePhone;
    private String employeeMail;

    public Long getEmployeeId() {
        return employeeId;
    }

    public String getEmployeeUsername() {
        return employeeUsername;
    }

    public void setEmployeeUsername(String employeeUsername) {
        this.employeeUsername = employeeUsername;
    }

    public String getEmployeePassword() {
        return employeePassword;
    }

    public void setEmployeePassword(String employeePassword) {
        this.employeePassword = employeePassword;
    }

    public String getEmployeeFirstName() {
        return employeeFirstName;
    }

    public void setEmployeeFirstName(String employeeFirstName) {
        this.employeeFirstName = employeeFirstName;
    }

    public String getEmployeeLastName() {
        return employeeLastName;
    }

    public void setEmployeeLastName(String employeeLastName) {
        this.employeeLastName = employeeLastName;
    }

    public String getEmployeePhone() {
        return employeePhone;
    }

    public void setEmployeePhone(String employeePhone) {
        this.employeePhone = employeePhone;
    }

    public String getEmployeeMail() {
        return employeeMail;
    }

    public void setEmployeeMail(String employeeMail) {
        this.employeeMail = employeeMail;
    }
}
