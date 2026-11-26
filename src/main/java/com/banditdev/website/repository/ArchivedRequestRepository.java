package com.banditdev.website.repository;

import com.banditdev.website.model.ArchivedRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArchivedRequestRepository extends JpaRepository<ArchivedRequest, Long> {
}
