import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() tasks: string[] = [];
  @Input() filter: string = 'all';
  completed: boolean[] = [];
  filteredTasks: string[] = [];

  ngOnInit() {
    this.initializeCompletedArray();
    this.filterTasks();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter']) {
      this.filterTasks();
    }
  }

  initializeCompletedArray() {
    this.completed = new Array(this.tasks.length).fill(false);
  }

  onTaskStatusClick(index: number) {
    if (this.filter === 'incomplete') {
      return; // Evitar marcar/desmarcar la tarea cuando se selecciona "incompleto"
    }
    this.completed[index] = !this.completed[index];
    console.log(`La tarea '${this.tasks[index]}' ha sido marcada como ${this.completed[index] ? 'completada' : 'incompleta'}.`);
    this.filterTasks();
  }

  filterTasks() {
    if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter((_, index) => this.completed[index]);
    } else if (this.filter === 'incomplete') {
      this.filteredTasks = this.tasks.filter((_, index) => !this.completed[index]);
      this.completed = new Array(this.tasks.length).fill(false); // Reiniciar los estados completados
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
