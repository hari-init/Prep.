import { NgFor, NgIf, CurrencyPipe } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  @Input({ required: true }) results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
