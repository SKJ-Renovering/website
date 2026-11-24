package com.banditdev.website.model.DTO;

// Skal nok også have employee navn, mail og telefon nummer til footer.
public record MailTemplateDTO(String recipientMail, String textSubject, String textBody, String textFooter) {
}
