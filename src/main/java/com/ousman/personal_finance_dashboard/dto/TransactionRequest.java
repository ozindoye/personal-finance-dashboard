package com.ousman.personal_finance_dashboard.dto;

import com.ousman.personal_finance_dashboard.model.TransactionType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionRequest(

        @NotNull(message = "Amount is required")
        @Positive(message = "Amount must be positive")
        BigDecimal amount,

        @NotBlank(message = "Category is required")
        String category,

        String description,

        @NotNull(message = "Date is required")
        LocalDate date,

        @NotNull(message = "Type is required")
        TransactionType type
) {
}
