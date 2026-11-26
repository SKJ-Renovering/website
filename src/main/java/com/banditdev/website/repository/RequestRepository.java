package com.banditdev.website.repository;

import com.banditdev.website.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Long> {

    List<Request> findByIsRepliedFalse();
}
