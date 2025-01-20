import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NgFor, NgIf } from "@angular/common";
import { NewTaskComponent } from "./new-task/new-task.component";
import { AddTask } from "./task/task.model";
import { TaskService } from "./tasks.service";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf, NewTaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  constructor(private taskService: TaskService) {}

  @Input({
    required: true,
  })
  name!: string;

  @Input({
    required: true,
  })
  id!: string;

  showAddTask = false;

  get selectedUser() {
    return this.taskService.getUserID(this.id);
  }

  onAddTask() {
    this.showAddTask = true;
  }
  onCancelTask() {
    this.showAddTask = false;
  }

  onAddTaskData(taskData: AddTask) {
    this.taskService.addTask(taskData, this.id);
    this.showAddTask = false;
  }
}
