package com.ousman.personal_finance_dashboard.dto;

import com.ousman.personal_finance_dashboard.model.Transaction;

public class TransactionMapper {

    public static Transaction toEntity(TransactionRequest request) {
        return new Transaction(
                request.amount(),
                request.category(),
                request.description(),
                request.date(),
                request.type()
        );
    }

    public static TransactionResponse toResponse(Transaction transaction) {
        return new TransactionResponse(
                transaction.getId(),
                transaction.getAmount(),
                transaction.getCategory(),
                transaction.getDescription(),
                transaction.getDate(),
                transaction.getType()
        );
    }
}
