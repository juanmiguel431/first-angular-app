import { Component, output } from '@angular/core';
import { UserTaskFormDto } from '../../models';

@Component({
  selector: 'app-user-task-form',
  imports: [],
  templateUrl: './user-task-form.html',
  styleUrl: './user-task-form.css',
})
export class UserTaskForm {
  protected title: string = '';
  protected summary: string = '';
  protected dueDate: string = '';

  public onClose = output();
  public onSubmit = output<UserTaskFormDto>();

  public onFormClose() {
    this.onClose.emit();
  }

  protected onFormSubmit() {
    this.onSubmit.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    });
  }

  protected onFormTitleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.title = target.value;
  }

  protected onFormSummaryChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.summary = target.value;
  }

  protected onFormDueDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.dueDate = target.value;
  }
}
