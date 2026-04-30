package com.emsi.taskflow.service;

import com.emsi.taskflow.dto.TaskStatsDto;
import com.emsi.taskflow.entity.Task;
import com.emsi.taskflow.enums.Status;
import com.emsi.taskflow.exception.ResourceNotFoundException;
import com.emsi.taskflow.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tâche introuvable avec id : " + id));
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task existingTask = getTaskById(id);
        existingTask.setTitle(updatedTask.getTitle());
        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setStatus(updatedTask.getStatus());
        existingTask.setPriority(updatedTask.getPriority());
        return taskRepository.save(existingTask);
    }

    public Task updateStatus(Long id, Status status) {
        Task existingTask = getTaskById(id);
        existingTask.setStatus(status);
        return taskRepository.save(existingTask);
    }

    public void deleteTask(Long id) {
        Task existingTask = getTaskById(id);
        taskRepository.delete(existingTask);
    }

    public TaskStatsDto getStats() {
        long total = taskRepository.count();
        long todo = taskRepository.countByStatus(Status.TODO);
        long inProgress = taskRepository.countByStatus(Status.IN_PROGRESS);
        long done = taskRepository.countByStatus(Status.DONE);
        return new TaskStatsDto(total, todo, inProgress, done);
    }
}
