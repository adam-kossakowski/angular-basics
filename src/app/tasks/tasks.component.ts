import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask: boolean = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basics',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Vue',
      summary: 'Learn all the basics',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master React',
      summary: 'Learn all the basics',
      dueDate: '2025-12-31',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }


  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
