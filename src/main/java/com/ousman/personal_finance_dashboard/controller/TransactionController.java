package com.ousman.personal_finance_dashboard.controller;

import com.ousman.personal_finance_dashboard.dto.TransactionMapper;
import com.ousman.personal_finance_dashboard.dto.TransactionRequest;
import com.ousman.personal_finance_dashboard.dto.TransactionResponse;
import com.ousman.personal_finance_dashboard.exception.ResourceNotFoundException;
import com.ousman.personal_finance_dashboard.model.Transaction;
import com.ousman.personal_finance_dashboard.service.TransactionService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @PostMapping
    public ResponseEntity<TransactionResponse> create(
            @Valid @RequestBody TransactionRequest request) {
        Transaction transaction = TransactionMapper.toEntity(request);
        Transaction saved = transactionService.save(transaction);
        return new ResponseEntity<>(TransactionMapper.toResponse(saved), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TransactionResponse>> getAll() {
        List<TransactionResponse> responses = transactionService.findAll()
                .stream()
                .map(TransactionMapper::toResponse)
                .toList();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionResponse> getById(@PathVariable Long id) {
        Transaction transaction = transactionService.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Transaction not found with id: " + id));
        return ResponseEntity.ok(TransactionMapper.toResponse(transaction));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransactionResponse> update(
            @PathVariable Long id,
            @Valid @RequestBody TransactionRequest request) {
        Transaction existing = transactionService.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Transaction not found with id: " + id));

        existing.setAmount(request.amount());
        existing.setCategory(request.category());
        existing.setDescription(request.description());
        existing.setDate(request.date());
        existing.setType(request.type());

        Transaction updated = transactionService.save(existing);
        return ResponseEntity.ok(TransactionMapper.toResponse(updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        transactionService.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Transaction not found with id: " + id));
        transactionService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/summary")
    public ResponseEntity<Map<String, BigDecimal>> getSummary() {
        return ResponseEntity.ok(transactionService.getSummary());
    }
}