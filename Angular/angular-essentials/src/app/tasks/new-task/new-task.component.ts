import { Component, EventEmitter, inject, Output, Input } from "@angular/core";
import { TaskService } from "../tasks.service";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  private taskService = inject(TaskService);
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();

  taskTitle!: string;
  taskSummary!: string;
  taskDate!: string;

  onCancelHandler() {
    this.cancel.emit();
  }

  onSubmitHandler() {
    this.taskService.addTask(
      {
        title: this.taskTitle,
        summary: this.taskSummary,
        dueDate: this.taskDate,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
