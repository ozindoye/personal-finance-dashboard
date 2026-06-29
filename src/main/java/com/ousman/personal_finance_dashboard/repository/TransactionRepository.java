package com.ousman.personal_finance_dashboard.repository;

import com.ousman.personal_finance_dashboard.model.Transaction;
import com.ousman.personal_finance_dashboard.model.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findByType(TransactionType type);
}
