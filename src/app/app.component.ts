import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = [];
  selectedFilter: string = 'all';

  addTask(task: string) {
    this.tasks.push(task);
  }

  onFilterChanged(filter: string) {
    this.selectedFilter = filter;
  }
}
