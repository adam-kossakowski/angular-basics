import { Component, output, signal, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;

  enteredTitle = '';
  enteredSummary = '';

  constructor(private tasksService: TasksService){}

  // with usage of signal
  enteredDueDate = signal('');
  // enteredDueDate = '';

  close = output();
  // added = output<NewTaskData>();

  onCancelClick() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      date: this.enteredDueDate(),
      summary: this.enteredSummary
    }, this.userId);
    this.close.emit();
  }
}
