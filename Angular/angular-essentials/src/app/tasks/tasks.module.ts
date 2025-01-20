import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../shared/card/card.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [NewTaskComponent, TaskComponent, TasksComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
