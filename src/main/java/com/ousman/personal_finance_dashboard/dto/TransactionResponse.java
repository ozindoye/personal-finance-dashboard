package com.ousman.personal_finance_dashboard.dto;

import com.ousman.personal_finance_dashboard.model.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionResponse(
        Long id,
        BigDecimal amount,
        String category,
        String description,
        LocalDate date,
        TransactionType type
) {
}
