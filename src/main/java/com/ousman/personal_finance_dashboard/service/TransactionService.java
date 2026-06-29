package com.ousman.personal_finance_dashboard.service;

import com.ousman.personal_finance_dashboard.model.Transaction;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface TransactionService {

    Transaction save(Transaction transaction);

    List<Transaction> findAll();

    Optional<Transaction> findById(Long id);

    void deleteById(Long id);

    Map<String, BigDecimal> getSummary();
}
