import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Priority, Status, Task, TaskStats } from './models/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  stats: TaskStats = { total: 0, todo: 0, inProgress: 0, done: 0 };

  newTask: Task = { title: '', description: '', status: 'TODO', priority: 'MEDIUM' };
  editingTaskId: number | null = null;
  selectedFilter: 'ALL' | Status = 'ALL';
  searchText = '';
  errorMessage = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.loadStats();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => { this.tasks = data; this.errorMessage = ''; },
      error: () => { this.errorMessage = 'Impossible de charger les tâches. Vérifiez que le backend Spring Boot est lancé.'; }
    });
  }

  loadStats(): void {
    this.taskService.getStats().subscribe({
      next: (data) => this.stats = data,
      error: () => console.error('Erreur chargement statistiques')
    });
  }

  saveTask(): void {
    if (!this.newTask.title.trim()) {
      alert('Le titre est obligatoire');
      return;
    }

    if (this.editingTaskId !== null) {
      this.taskService.updateTask(this.editingTaskId, this.newTask).subscribe({
        next: () => { this.loadTasks(); this.loadStats(); this.resetForm(); },
        error: () => alert('Erreur lors de la modification')
      });
    } else {
      this.taskService.createTask(this.newTask).subscribe({
        next: () => { this.loadTasks(); this.loadStats(); this.resetForm(); },
        error: () => alert('Erreur lors de la création')
      });
    }
  }

  editTask(task: Task): void {
    this.editingTaskId = task.id ?? null;
    this.newTask = { ...task };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteTask(id?: number): void {
    if (!id) return;
    if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => { this.loadTasks(); this.loadStats(); },
        error: () => alert('Erreur lors de la suppression')
      });
    }
  }

  changeStatus(task: Task, status: Status): void {
    if (!task.id) return;
    this.taskService.updateStatus(task.id, status).subscribe({
      next: () => { this.loadTasks(); this.loadStats(); },
      error: () => alert('Erreur lors du changement de statut')
    });
  }

  resetForm(): void {
    this.editingTaskId = null;
    this.newTask = { title: '', description: '', status: 'TODO', priority: 'MEDIUM' };
  }

  setFilter(filter: 'ALL' | Status): void {
    this.selectedFilter = filter;
  }

  get filteredTasks(): Task[] {
    return this.tasks.filter(task => {
      const matchesFilter = this.selectedFilter === 'ALL' || task.status === this.selectedFilter;
      const text = this.searchText.toLowerCase();
      const matchesSearch = task.title.toLowerCase().includes(text) || task.description.toLowerCase().includes(text);
      return matchesFilter && matchesSearch;
    });
  }

  getPriorityLabel(priority: Priority): string {
    switch (priority) {
      case 'LOW': return 'Faible';
      case 'MEDIUM': return 'Moyenne';
      case 'HIGH': return 'Haute';
    }
  }

  getStatusLabel(status: Status): string {
    switch (status) {
      case 'TODO': return 'À faire';
      case 'IN_PROGRESS': return 'En cours';
      case 'DONE': return 'Terminée';
    }
  }
}
