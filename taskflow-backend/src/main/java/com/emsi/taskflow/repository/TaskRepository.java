package com.emsi.taskflow.repository;

import com.emsi.taskflow.entity.Task;
import com.emsi.taskflow.enums.Priority;
import com.emsi.taskflow.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatus(Status status);
    List<Task> findByPriority(Priority priority);
    long countByStatus(Status status);
}
