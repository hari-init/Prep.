import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Investment } from "../invest.model";

@Component({
  selector: "app-user-inputs",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-inputs.component.html",
  styleUrl: "./user-inputs.component.css",
})
export class UserInputsComponent {
  @Output() calculate = new EventEmitter<Investment>();
  initialInvestment = "0";
  annualInvestment = "0";
  return = "5";
  duration = "10";

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.return,
      duration: +this.duration,
    });
  }
}
