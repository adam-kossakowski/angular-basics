import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';

  //with usage of signal
  enteredDueDate = signal('');

  cancel = output();

  onCancelClick() {
    this.cancel.emit();
  }

  onSubmit() {
    
  }
}
