import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from "@angular/core";

import { User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: "app-user",
  standalone: true,
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
  imports: [CardComponent],
})
export class UserComponent {
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>()
  // imagePath = computed(() => {
  //   return "assets/users/" + this.avatar();
  // });

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }
  onSelectHandler() {
    this.select.emit(this.user.id);
  }
}
